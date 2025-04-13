"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStudy } from "@/context/StudyContext";
import Link from "next/link";
import Flashcard from "@/app/_components/flashcard";

export default function Study({ params }) {
  const { fetchDeckById, fetchFlashcards } = useStudy();
  const [deck, setDeck] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDeckAndCards = async () => {
      try {
        setIsLoading(true);
        const deckData = await fetchDeckById(params.stuydId);
        const cardsData = await fetchFlashcards(params.stuydId);
        setDeck(deckData);
        setFlashcards(cardsData);
      } catch (error) {
        console.error("Error loading deck and flashcards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDeckAndCards();
  }, [params.stuydId]);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === " ") {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/decks"
              className="text-gray-500 hover:text-gray-700">
              ← Back to Decks
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            {deck?.title || "Study Session"}
          </h1>
          <p className="text-gray-500">{deck?.description}</p>
        </div>
      </div>

      {/* Flashcard Section */}
      {flashcards.length > 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}>
                <Flashcard
                  deck={{
                    question: flashcards[currentIndex].question,
                    answer: flashcards[currentIndex].answer,
                    deckName: deck?.title,
                    cardNumber: `${currentIndex + 1}/${flashcards.length}`,
                    hint: flashcards[currentIndex].hint,
                    tags: flashcards[currentIndex].tags,
                  }}
                  isFlipped={isFlipped}
                  onFlip={() => setIsFlipped((prev) => !prev)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevious}
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
          <div className="text-sm text-gray-500 text-center">
            <p>Keyboard shortcuts:</p>
            <p>Space - Flip card • ← Previous • → Next</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No flashcards found in this deck.</p>
          <Link
            href="/dashboard/decks"
            className="text-yellow-600 hover:text-yellow-700 font-medium mt-2 inline-block">
            Return to Decks
          </Link>
        </div>
      )}
    </div>
  );
}
