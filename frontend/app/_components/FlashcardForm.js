"use client";

import { useState, useEffect } from "react";
import { useStudy } from "@/context/StudyContext";
import toast from "react-hot-toast";

export default function FlashcardForm({
  flashcard,
  onSuccess,
  onCancel,
  deckId,
}) {
  const { decks, createFlashcard, updateFlashcard } = useStudy();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    hint: "",
    tags: "",
    deckId: deckId || "",
  });

  // Populate form with flashcard data if editing
  useEffect(() => {
    if (flashcard) {
      setFormData({
        question: flashcard.question || "",
        answer: flashcard.answer || "",
        hint: flashcard.hint || "",
        tags: flashcard.tags ? flashcard.tags.join(", ") : "",
        deckId: flashcard.deckId || deckId || "",
      });
    } else if (deckId) {
      // If we have a deckId but no flashcard (creating new), set the deckId
      setFormData((prev) => ({
        ...prev,
        deckId: deckId,
      }));
    }
  }, [flashcard, deckId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.question.trim()) {
        throw new Error("Question is required");
      }
      if (!formData.answer.trim()) {
        throw new Error("Answer is required");
      }
      if (!formData.deckId) {
        throw new Error("Please select a deck");
      }

      // Process tags
      const processedTags = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const flashcardData = {
        ...formData,
        tags: processedTags,
      };

      if (flashcard) {
        // Update existing flashcard
        console.log("Updating flashcard with ID:", flashcard._id);
        await updateFlashcard(formData.deckId, flashcard._id, flashcardData);
        toast.success("Flashcard updated successfully!");
      } else {
        // Create new flashcard
        console.log("Creating flashcard for deck:", formData.deckId);
        await createFlashcard(formData.deckId, flashcardData);
        toast.success("Flashcard created successfully!");
      }

      onSuccess();
    } catch (err) {
      console.error("Error submitting flashcard:", err);
      setError(err.message || "An error occurred. Please try again.");
      toast.error(err.message || "Failed to save flashcard. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {flashcard ? "Edit Flashcard" : "Create New Flashcard"}
      </h2>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md mb-4">
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

      {/* Deck Selection - Only show if deckId is not provided */}
      {!deckId && (
        <div className="space-y-2">
          <label
            htmlFor="deckId"
            className="block text-sm font-medium text-gray-700">
            Deck
          </label>
          <select
            id="deckId"
            name="deckId"
            value={formData.deckId}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            required>
            <option value="">Select a deck</option>
            {decks.map((deck) => (
              <option key={deck._id} value={deck._id}>
                {deck.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Question */}
      <div className="space-y-2">
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-700">
          Question
        </label>
        <textarea
          id="question"
          name="question"
          rows={3}
          value={formData.question}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="Enter your question here"
          required
        />
      </div>

      {/* Answer */}
      <div className="space-y-2">
        <label
          htmlFor="answer"
          className="block text-sm font-medium text-gray-700">
          Answer
        </label>
        <textarea
          id="answer"
          name="answer"
          rows={3}
          value={formData.answer}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="Enter the answer here"
          required
        />
      </div>

      {/* Hint (Optional) */}
      <div className="space-y-2">
        <label
          htmlFor="hint"
          className="block text-sm font-medium text-gray-700">
          Hint <span className="text-gray-500 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="hint"
          name="hint"
          value={formData.hint}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="Enter a hint to help remember the answer"
        />
      </div>

      {/* Tags (Optional) */}
      <div className="space-y-2">
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700">
          Tags <span className="text-gray-500 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="Enter tags separated by commas (e.g., math, algebra, equations)"
        />
        <p className="text-xs text-gray-500 italic">
          Separate tags with commas
        </p>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          {isLoading ? (
            <span className="flex items-center">
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
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </span>
          ) : flashcard ? (
            "Update Flashcard"
          ) : (
            "Create Flashcard"
          )}
        </button>
      </div>
    </form>
  );
}
