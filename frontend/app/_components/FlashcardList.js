"use client";

import React from "react";
import FlashcardListItem from "./FlashcardListItem";

/**
 * FlashcardList component for displaying a list of flashcards
 * @param {Object} props
 * @param {Array} props.flashcards - Array of flashcard objects
 * @param {Function} props.onEdit - Callback when a flashcard is edited
 * @param {Function} props.onCreate - Callback to create a new flashcard
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.layout="grid"] - Layout type: "grid" or "list"
 */
export default function FlashcardList({
  flashcards = [],
  onEdit,
  onCreate,
  className = "",
  layout = "grid",
}) {
  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No flashcards yet
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating your first flashcard.
        </p>
        {onCreate && (
          <div className="mt-6">
            <button
              onClick={onCreate}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Flashcard
            </button>
          </div>
        )}
      </div>
    );
  }

  const containerClass =
    layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4";

  return (
    <div className={`${containerClass} ${className}`}>
      {flashcards.map((flashcard, index) => (
        <FlashcardListItem
          key={flashcard._id}
          flashcard={flashcard}
          index={index}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
