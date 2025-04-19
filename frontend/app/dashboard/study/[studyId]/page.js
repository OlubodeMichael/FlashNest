"use client";

import { useState, useEffect } from "react";
import { useStudy } from "@/context/StudyContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import FlashcardViewer from "@/app/_components/FlashcardViewer";
import FlashcardList from "@/app/_components/FlashcardList";

export default function Study() {
  const params = useParams();
  const { fetchDeck, deck, isLoading } = useStudy();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadDeck = async () => {
      if (!params?.studyId) {
        console.error("Study ID is undefined");
        return;
      }

      // Reset state when loading a new deck
      setCurrentIndex(0);

      // Fetch the deck (which includes flashcards)
      await fetchDeck(params.studyId);
    };

    loadDeck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.studyId]);

  // Reset card index when flashcards change
  useEffect(() => {
    setCurrentIndex(0);
  }, [deck?.flashcards?.length]);

  const handleCardChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!deck) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-800">Deck not found</h2>
        <p className="text-gray-500 mt-2">
          The deck you're looking for doesn't exist.
        </p>
        <Link href="/dashboard/study">
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm">
            Back to Study Mode
          </button>
        </Link>
      </div>
    );
  }

  const hasFlashcards = deck.flashcards && deck.flashcards.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/study"
              className="text-gray-500 hover:text-gray-700">
              ← Back to Study Mode
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            {deck?.title || "Study Session"}
          </h1>
          <p className="text-gray-500">{deck?.description}</p>
        </div>
      </div>

      {/* Flashcard Section */}
      {hasFlashcards ? (
        <FlashcardViewer
          flashcards={deck.flashcards}
          initialIndex={currentIndex}
          onCardChange={handleCardChange}
          deckName={deck?.title}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No flashcards found in this deck.</p>
          <Link
            href="/dashboard/study"
            className="text-yellow-600 hover:text-yellow-700 font-medium mt-2 inline-block">
            Return to Study Mode
          </Link>
        </div>
      )}

      {/* All Flashcards List - Only show if there are flashcards */}
      {hasFlashcards && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            All Flashcards
          </h2>
          <FlashcardList flashcards={deck.flashcards} layout="list" />
        </div>
      )}
    </div>
  );
}
