"use client";

import { useState, useEffect } from "react";
import { useStudy } from "@/context/StudyContext";

export default function DeckForm({ deck, onSuccess, onCancel }) {
  const { createDeck, updateDeck } = useStudy();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    isPublic: false,
  });

  useEffect(() => {
    if (deck) {
      setFormData({
        title: deck.title || "",
        description: deck.description || "",
        category: deck?.category || "",
        isPublic: deck?.isPublic || false,
      });
    }
  }, [deck]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setIsLoading(true);
      if (deck) {
        await updateDeck(deck._id, formData);
      } else {
        await createDeck(formData);
      }
      onSuccess?.();
    } catch (err) {
      setError(err.message || `Failed to ${deck ? "update" : "create"} deck`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-1">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700">
            Title
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter deck title"
            className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Give your deck a descriptive title
          </p>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter deck description"
            rows={4}
            className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
          />
          <p className="text-xs text-gray-500 mt-1">
            Describe what this deck is about
          </p>
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors appearance-none bg-white">
            <option value="">Select a category</option>
            <option value="language">Language</option>
            <option value="science">Science</option>
            <option value="math">Mathematics</option>
            <option value="history">History</option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute right-0 top-0 mt-8 mr-4 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Categorize your deck for better organization
          </p>
        </div>

        {/* Public/Private Toggle */}
        <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
            className="h-5 w-5 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded transition-colors"
          />
          <div className="ml-3">
            <label
              htmlFor="isPublic"
              className="text-sm font-medium text-gray-700">
              Make this deck public
            </label>
            <p className="text-xs text-gray-500 mt-0.5">
              Others can discover and use your deck
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors">
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 px-5 py-2.5 text-sm font-medium text-black bg-yellow-400 border border-transparent rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
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
                {deck ? "Updating..." : "Creating..."}
              </span>
            ) : deck ? (
              "Update Deck"
            ) : (
              "Create Deck"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
