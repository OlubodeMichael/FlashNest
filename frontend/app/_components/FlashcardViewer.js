"use client";

import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";

/**
 * FlashcardViewer component for displaying and navigating through flashcards
 * @param {Object} props
 * @param {Array} props.flashcards - Array of flashcard objects
 * @param {number} [props.initialIndex=0] - Initial card index to display
 * @param {Function} [props.onCardChange] - Callback when card changes
 * @param {string} [props.deckName] - Name of the deck
 * @param {string} [props.className] - Additional CSS classes
 */
export default function FlashcardViewer({
  flashcards = [],
  initialIndex = 0,
  onCardChange,
  deckName = "Deck",
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFlipped, setIsFlipped] = useState(false);

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      if (onCardChange) onCardChange(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      if (onCardChange) onCardChange(newIndex);
    }
  };

  const handleFlip = (flipped) => {
    setIsFlipped(flipped);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " ") {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, flashcards.length]);

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No flashcards available.</p>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[400px] ${className}`}>
      <div className="w-full max-w-2xl flex justify-center">
        <Flashcard
          front={currentCard?.question || ""}
          back={currentCard?.answer || ""}
          deckName={deckName}
          cardNumber={`${currentIndex + 1}/${flashcards.length}`}
          hint={currentCard?.hint}
          tags={currentCard?.tags}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="text-sm text-gray-500 text-center mt-4">
        <p>Keyboard shortcuts:</p>
        <p>Space - Flip card • ← Previous • → Next</p>
      </div>
    </div>
  );
}
