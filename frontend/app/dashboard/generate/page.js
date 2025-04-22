"use client";

import { useState, useEffect } from "react";
import { useStudy } from "@/context/StudyContext";
import { useAi } from "@/context/AiContext";
import FlashcardForm from "@/app/_components/FlashcardForm";
import toast from "react-hot-toast";

export default function GenerateFlashcards() {
  const { decks, fetchDecks, createFlashcard } = useStudy();
  const {
    previewFlashcards,
    saveFlashcards,
    aiFlashcards,
    isLoading: aiLoading,
    error: aiError,
  } = useAi();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDeckId, setSelectedDeckId] = useState("");
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [count, setCount] = useState(10);
  const [inputType, setInputType] = useState("topic"); // "topic" or "text"
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Create a preview URL for the file
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validate input
      if (!inputText && !file) {
        throw new Error("Please provide a topic, text, or file");
      }

      if (!selectedDeckId) {
        throw new Error("Please select a deck");
      }

      // Use the previewFlashcards function from AiContext
      await previewFlashcards({
        topic: inputType === "topic" ? inputText : "",
        text: inputType === "text" ? inputText : "",
        file: file,
        count: count,
      });

      if (aiError) {
        console.error("Error generating flashcards:", aiError);
        throw new Error(aiError);
      }

      toast.success("Flashcards generated successfully!");
    } catch (err) {
      console.error("Error generating flashcards:", err);
      setError(err.message || "An error occurred. Please try again.");
      toast.error(
        err.message || "Failed to generate flashcards. Please try again."
      );
    }
  };

  const handleRegenerate = async () => {
    try {
      setIsRegenerating(true);
      setError("");

      // Use the previewFlashcards function from AiContext
      await previewFlashcards({
        topic: inputType === "topic" ? inputText : "",
        text: inputType === "text" ? inputText : "",
        file: file,
        count: count,
      });

      if (aiError) {
        console.error("Error regenerating flashcards:", aiError);
        throw new Error(aiError);
      }

      toast.success("Flashcards regenerated successfully!");
    } catch (err) {
      console.error("Error regenerating flashcards:", err);
      setError(err.message || "An error occurred. Please try again.");
      toast.error(
        err.message || "Failed to regenerate flashcards. Please try again."
      );
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleSaveFlashcard = async (flashcard) => {
    try {
      await createFlashcard(selectedDeckId, {
        ...flashcard,
        deckId: selectedDeckId,
      });
      toast.success("Flashcard saved successfully!");
      await fetchDecks();
    } catch (err) {
      console.error("Error saving flashcard:", err);
      toast.error("Failed to save flashcard. Please try again.");
    }
  };

  const handleSaveAll = async () => {
    try {
      setIsLoading(true);

      // Use the saveFlashcards function from AiContext
      const savedFlashcards = await saveFlashcards(
        aiFlashcards,
        selectedDeckId
      );

      if (savedFlashcards) {
        toast.success("All flashcards saved successfully!");
      } else {
        toast.error("Failed to save some flashcards. Please try again.");
      }

      await fetchDecks();
    } catch (err) {
      console.error("Error saving flashcards:", err);
      toast.error("Failed to save flashcards. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInputType = () => {
    setInputType(inputType === "topic" ? "text" : "topic");
  };

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
        Generate Flashcards
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {/* Generation Form */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">
            Generate Flashcards
          </h2>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-3 sm:p-4 rounded-md mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleGenerate} className="space-y-4 sm:space-y-6">
            {/* Deck Selection */}
            <div className="space-y-2">
              <label
                htmlFor="selectedDeckId"
                className="block text-sm font-medium text-gray-700">
                Deck
              </label>
              <select
                id="selectedDeckId"
                value={selectedDeckId}
                onChange={(e) => setSelectedDeckId(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                required>
                <option value="">Select a deck</option>
                {decks.map((deck) => (
                  <option key={deck._id} value={deck._id}>
                    {deck.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Input Type Toggle */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={toggleInputType}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md ${
                  inputType === "topic"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}>
                Topic
              </button>
              <button
                type="button"
                onClick={toggleInputType}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md ${
                  inputType === "text"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}>
                Text
              </button>
            </div>

            {/* Combined Input for Topic/Text */}
            <div className="space-y-2">
              <label
                htmlFor="inputText"
                className="block text-sm font-medium text-gray-700">
                {inputType === "topic" ? "Topic" : "Text"}
              </label>
              <textarea
                id="inputText"
                value={inputText}
                onChange={handleInputChange}
                rows={inputType === "topic" ? 1 : 4}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder={
                  inputType === "topic"
                    ? "Enter a topic (e.g., 'World War II', 'Photosynthesis')"
                    : "Paste text to generate flashcards from"
                }
              />
            </div>

            {/* File Upload with Plus Icon */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Add File
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="file"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.docx"
                />
                {file && (
                  <div className="ml-3 flex items-center">
                    <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[150px] sm:max-w-[200px]">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setPreviewUrl(null);
                      }}
                      className="ml-2 text-red-500 hover:text-red-700">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 italic">
                Upload a PDF or DOCX file (max 10MB)
              </p>
            </div>

            {/* Count */}
            <div className="space-y-2">
              <label
                htmlFor="count"
                className="block text-sm font-medium text-gray-700">
                Number of Flashcards
              </label>
              <input
                type="number"
                id="count"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 10)}
                min="1"
                max="50"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
              <p className="text-xs text-gray-500 italic">
                How many flashcards to generate (1-50)
              </p>
            </div>

            {/* Generate Button */}
            <button
              type="submit"
              disabled={aiLoading}
              className="w-full px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              {aiLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Flashcards"
              )}
            </button>
          </form>
        </div>

        {/* Generated Flashcards */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-black">
              Generated Flashcards
            </h2>
            <div className="flex space-x-2">
              {aiFlashcards.length > 0 && (
                <>
                  <button
                    onClick={handleRegenerate}
                    disabled={isRegenerating}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    {isRegenerating ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-1 h-3 w-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Regenerating...
                      </span>
                    ) : (
                      "Regenerate"
                    )}
                  </button>
                  <button
                    onClick={handleSaveAll}
                    disabled={isLoading}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-transparent rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    Save All
                  </button>
                </>
              )}
            </div>
          </div>

          {aiFlashcards.length > 0 ? (
            <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[600px] overflow-y-auto">
              {aiFlashcards.map((flashcard, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div className="space-y-2 flex-1">
                      <div>
                        <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                          Question:
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                          {flashcard.question}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                          Answer:
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                          {flashcard.answer}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveFlashcard(flashcard)}
                      className="mt-2 sm:mt-0 sm:ml-4 px-2 sm:px-3 py-1 text-xs sm:text-sm border border-transparent rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8 text-gray-500">
              {aiLoading || isRegenerating ? (
                <div className="flex flex-col items-center">
                  <svg
                    className="animate-spin h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <p className="text-sm sm:text-base">
                    {isRegenerating
                      ? "Regenerating flashcards..."
                      : "Generating flashcards..."}
                  </p>
                </div>
              ) : (
                <p className="text-sm sm:text-base">
                  No flashcards generated yet. Fill out the form and click
                  "Generate Flashcards".
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
