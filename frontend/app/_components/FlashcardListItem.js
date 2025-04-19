"use client";

import React from "react";
import { motion } from "framer-motion";
import { formatDate } from "@/utils/dateUtils";

/**
 * FlashcardListItem component for displaying a flashcard in a list view
 * @param {Object} props
 * @param {Object} props.flashcard - The flashcard data object
 * @param {string} props.flashcard._id - Unique identifier for the flashcard
 * @param {string} props.flashcard.question - The question text
 * @param {string} props.flashcard.answer - The answer text
 * @param {string} props.flashcard.createdAt - Creation timestamp
 * @param {number} props.index - Index of the flashcard in the list (for animation)
 * @param {Function} props.onEdit - Callback function when edit button is clicked
 * @param {string} [props.className] - Additional CSS classes
 */

export default function FlashcardListItem({
  flashcard,
  index,
  onEdit,
  className = "",
}) {
  return (
    <motion.div
      key={flashcard._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{flashcard.question}</h3>
          <p className="text-gray-500 mt-1">{flashcard.answer}</p>
          <div className="mt-2 text-xs text-gray-400">
            Created {formatDate(flashcard.createdAt)}
          </div>
        </div>
        {onEdit && (
          <button
            onClick={() => onEdit(flashcard)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Edit flashcard">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}
