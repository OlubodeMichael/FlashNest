"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useStudy } from "@/context/StudyContext";
import Link from "next/link";
import Modal from "@/app/_components/Modal";
import FlashcardForm from "@/app/_components/FlashcardForm";
import DeckHeader from "@/app/_components/DeckHeader";
import FlashcardViewer from "@/app/_components/FlashcardViewer";
import FlashcardList from "@/app/_components/FlashcardList";

export default function DeckDetails() {
  const params = useParams();
  const router = useRouter();
  const { deck, fetchDeck, isLoading } = useStudy();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const loadDeck = async () => {
      if (!params?.id) {
        console.error("Deck ID is undefined");
        router.push("/dashboard/decks");
        return;
      }

      await fetchDeck(params.id);
    };

    loadDeck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  const handleCreateFlashcard = () => {
    setSelectedFlashcard(null);
    setIsModalOpen(true);
  };

  const handleEditFlashcard = (flashcard) => {
    setSelectedFlashcard(flashcard);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFlashcard(null);
  };

  const handleSuccess = async () => {
    setIsModalOpen(false);
    setSelectedFlashcard(null);

    if (params?.id) {
      await fetchDeck(params.id); // ✅ this alone updates the deck in context
    }
  };

  const handleCardChange = (index) => {
    setCurrentCardIndex(index);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
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
        <Link href="/dashboard/decks">
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm">
            Back to Decks
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Deck Header */}
      <DeckHeader
        title={deck.title}
        description={deck.description}
        createdAt={deck.createdAt}
        cardCount={deck.flashcards?.length || 0}
        deckId={deck._id}
        deck={deck}
      />

      {/* Flashcards Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Flashcards</h2>
          {deck.flashcards.length > 0 && (
            <button
              onClick={handleCreateFlashcard}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
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
          )}
        </div>

        {!deck.flashcards || deck.flashcards.length === 0 ? (
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
            <div className="mt-6">
              <button
                onClick={handleCreateFlashcard}
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
          </div>
        ) : (
          <>
            {/* Flashcard Viewer */}
            <div className="mb-8">
              <FlashcardViewer
                flashcards={deck.flashcards}
                initialIndex={currentCardIndex}
                onCardChange={handleCardChange}
                deckName={deck.title}
              />
            </div>

            {/* Flashcard List */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                All Flashcards
              </h3>
              <FlashcardList
                flashcards={deck.flashcards}
                onEdit={handleEditFlashcard}
                onCreate={handleCreateFlashcard}
                layout="list"
              />
            </div>
          </>
        )}
      </div>

      {/* Modal for creating/editing flashcards */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedFlashcard ? "Edit Flashcard" : "Create New Flashcard"}>
        <FlashcardForm
          deckId={deck._id}
          flashcard={selectedFlashcard}
          onSuccess={handleSuccess}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
