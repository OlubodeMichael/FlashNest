const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const fetch = require("node-fetch");

exports.previewFlashcards = catchAsync(async (req, res, next) => {
  const { topic, text, count = 10 } = req.body;

  // Validate API Key
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return next(new AppError("Missing OpenRouter API key", 500));

  // Validate count
  const validatedCount = parseInt(count, 10);
  if (isNaN(validatedCount) || validatedCount < 1 || validatedCount > 50) {
    return next(new AppError("Count must be between 1 and 50", 400));
  }

  // Handle input: topic, text, or file
  let content = "";
  if (topic) {
    content = `Generate ${validatedCount} flashcards on "${topic}".`;
  } else if (text) {
    content = `Generate ${validatedCount} flashcards from the following:\n\n${text}`;
  } else if (req.file?.buffer) {
    const buffer = req.file.buffer;
    if (req.file.mimetype === "application/pdf") {
      const data = await pdfParse(buffer);
      content = `Generate ${validatedCount} flashcards from this PDF:\n\n${data.text}`;
    } else if (req.file.mimetype.includes("wordprocessingml.document")) {
      const result = await mammoth.extractRawText({ buffer });
      content = `Generate ${validatedCount} flashcards from this DOCX:\n\n${result.value}`;
    } else {
      return next(new AppError("Unsupported file type", 400));
    }
  } else {
    return next(new AppError("Provide a topic, text, or file", 400));
  }

  // Prompt
  const prompt = `${content}

Only return a valid JSON array of flashcards. No explanation, no markdown.

Format:
[
  { "question": "What is H₂O?", "answer": "Water" },
  { "question": "What is the atomic number of Carbon?", "answer": "6" }
]`;

  // Request to OpenRouter
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        max_tokens: 1000,
        messages: [
          {
            role: "system",
            content: "You are an AI that generates study flashcards.",
          },
          { role: "user", content: prompt },
        ],
      }),
    }
  );

  // Handle non-200 responses
  if (!response.ok) {
    console.error("❌ OpenRouter non-200 response:", await response.text());
    return next(
      new AppError(`OpenRouter error: ${response.statusText}`, response.status)
    );
  }

  const data = await response.json();

  if (data.error) {
    console.error("❌ OpenRouter error:", data.error.message);
    return next(new AppError(data.error.message, 502));
  }

  let message = data.choices?.[0]?.message?.content || "";

  // Clean markdown code fences
  message = message.replace(/```json|```/g, "").trim();

  // Try parsing the response
  let flashcards;
  try {
    flashcards = JSON.parse(message);
  } catch (err) {
    // Try to extract the JSON array if full message parsing fails
    const match = message.match(/\[([\s\S]*?)\]/);
    if (match) {
      const jsonString = "[" + match[1] + "]";
      try {
        flashcards = JSON.parse(jsonString);
      } catch (parseErr) {
        console.error("❌ JSON parse error:", parseErr.message);
        return next(new AppError("AI returned unparseable JSON", 502));
      }
    } else {
      console.error("❌ No JSON array found in AI response.");
      return next(new AppError("AI did not return any valid JSON", 502));
    }
  }

  // Validate flashcards array
  if (!Array.isArray(flashcards) || flashcards.length === 0) {
    return next(new AppError("No valid flashcards returned", 502));
  }

  // Respond with flashcards
  res.status(200).json({
    status: "success",
    flashcards,
  });
});
