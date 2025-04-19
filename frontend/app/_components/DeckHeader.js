"use client";

import React from "react";
import Link from "next/link";
import { formatDate } from "../../utils/dateUtils";

/**
 * DeckHeader component for displaying deck information and actions
 * @param {Object} props
 * @param {string} props.title - The deck title
 * @param {string} [props.description] - The deck description
 * @param {string} props.createdAt - Creation timestamp
 * @param {number} props.cardCount - Number of flashcards in the deck
 * @param {string} props.deckId - Unique identifier for the deck
 * @param {string} [props.className] - Additional CSS classes
 */
export default function DeckHeader({
  title,
  description,
  createdAt,
  cardCount,
  deckId,
  className = "",
}) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href="/dashboard/decks">
              <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Back to Decks</span>
              </button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          {description && <p className="text-gray-500 mt-1">{description}</p>}
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <span>Created {formatDate(createdAt)}</span>
            <span className="mx-2">•</span>
            <span>{cardCount} cards</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link href={`/dashboard/decks/${deckId}/edit`}>
            <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium">
              Edit Deck
            </button>
          </Link>
          <Link href={`/dashboard/study?deck=${deckId}`}>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium">
              Study Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
