"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useStudy } from "@/context/StudyContext";
import Link from "next/link";
import Flashcard from "@/app/_components/flashcard";
import Modal from "@/app/_components/Modal";
import FlashcardForm from "@/app/_components/FlashcardForm";

export default function DeckDetails() {
  const params = useParams();
  const router = useRouter();
  const { deck, fetchDeck, isLoading } = useStudy();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(deck);

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

  const handleNextCard = () => {
    if (currentCardIndex < (deck?.flashcards?.length || 0) - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
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

  const formatDate = (date) => {
    if (!date) return "Unknown date";
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) return "Invalid date";
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Error formatting date";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
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
            <h1 className="text-2xl font-bold text-gray-800">{deck.title}</h1>
            {deck.description && (
              <p className="text-gray-500 mt-1">{deck.description}</p>
            )}
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>Created {formatDate(deck.createdAt)}</span>
              <span className="mx-2">•</span>
              <span>{deck.flashcards?.length || 0} cards</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link href={`/dashboard/decks/${deck._id}/edit`}>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium">
                Edit Deck
              </button>
            </Link>
            <Link href={`/dashboard/study?deck=${deck._id}`}>
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium">
                Study Now
              </button>
            </Link>
          </div>
        </div>
      </div>

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
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <Flashcard
                  front={deck.flashcards[currentCardIndex]?.question || ""}
                  back={deck.flashcards[currentCardIndex]?.answer || ""}
                  deckName={deck.title}
                  cardNumber={`${currentCardIndex + 1}/${
                    deck.flashcards.length
                  }`}
                  isFlipped={isFlipped}
                  onFlip={setIsFlipped}
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handlePrevCard}
                  disabled={currentCardIndex === 0}
                  className={`px-4 py-2 rounded-md ${
                    currentCardIndex === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}>
                  Previous
                </button>
                <button
                  onClick={handleNextCard}
                  disabled={currentCardIndex === deck.flashcards.length - 1}
                  className={`px-4 py-2 rounded-md ${
                    currentCardIndex === deck.flashcards.length - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}>
                  Next
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {deck.flashcards.map((flashcard, index) => (
                <motion.div
                  key={flashcard._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {flashcard.question}
                      </h3>
                      <p className="text-gray-500 mt-1">{flashcard.answer}</p>
                      <div className="mt-2 text-xs text-gray-400">
                        Created {formatDate(flashcard.createdAt)}
                      </div>
                    </div>
                    <button
                      onClick={() => handleEditFlashcard(flashcard)}
                      className="text-gray-400 hover:text-gray-600">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

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
