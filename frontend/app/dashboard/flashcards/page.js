"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthProvider";
import Flashcard from "@/app/_components/flashcard";

export default function Flashcards() {
  const { user } = useAuth();
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeck, setSelectedDeck] = useState("all");
  const [decks, setDecks] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call for decks
    const fetchDecks = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/decks');
        // const data = await response.json();

        // Mock data
        const mockDecks = [
          { id: "all", title: "All Decks" },
          { id: 1, title: "JavaScript Fundamentals" },
          { id: 2, title: "React Hooks" },
          { id: 3, title: "CSS Flexbox & Grid" },
          { id: 4, title: "Next.js Basics" },
        ];

        setDecks(mockDecks);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
    };

    fetchDecks();
  }, []);

  // Mock data for flashcards
  useEffect(() => {
    // Simulate API call
    const fetchFlashcards = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/flashcards');
        // const data = await response.json();

        // Mock data
        const mockFlashcards = [
          {
            id: 1,
            deckId: 1,
            front: "What is a closure in JavaScript?",
            back: "A closure is the combination of a function bundled together with references to its surrounding state. In other words, a closure gives you access to an outer function's scope from an inner function.",
            lastReviewed: "2023-06-15",
            masteryLevel: 80,
          },
          {
            id: 2,
            deckId: 1,
            front:
              "What is the difference between '==' and '===' in JavaScript?",
            back: "'==' performs type coercion before comparison, while '===' checks both value and type without coercion. '===' is generally preferred as it's more predictable.",
            lastReviewed: "2023-06-16",
            masteryLevel: 90,
          },
          {
            id: 3,
            deckId: 2,
            front: "What is the purpose of the useState hook in React?",
            back: "useState is a React Hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.",
            lastReviewed: "2023-06-18",
            masteryLevel: 75,
          },
          {
            id: 4,
            deckId: 2,
            front: "What is the useEffect hook used for?",
            back: "useEffect is a React Hook that lets you perform side effects in function components. It's used for data fetching, subscriptions, or manually changing the DOM in response to state changes.",
            lastReviewed: "2023-06-19",
            masteryLevel: 70,
          },
          {
            id: 5,
            deckId: 3,
            front: "What is the difference between Flexbox and Grid?",
            back: "Flexbox is designed for one-dimensional layouts (either rows or columns), while Grid is designed for two-dimensional layouts (rows and columns simultaneously).",
            lastReviewed: "2023-06-10",
            masteryLevel: 85,
          },
          {
            id: 6,
            deckId: 4,
            front: "What is server-side rendering in Next.js?",
            back: "Server-side rendering (SSR) in Next.js is the ability to render a page on the server before sending it to the client. This improves performance, SEO, and user experience.",
            lastReviewed: "2023-06-20",
            masteryLevel: 60,
          },
        ];

        setTimeout(() => {
          setFlashcards(mockFlashcards);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
        setIsLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  // Filter flashcards based on search term and selected deck
  const filteredFlashcards = flashcards.filter((card) => {
    const matchesSearch =
      card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.back.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedDeck === "all") return matchesSearch;
    return matchesSearch && card.deckId === selectedDeck;
  });

  // Handle card navigation
  const handleNextCard = () => {
    if (currentCardIndex < filteredFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  // Format date to readable string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Your Flashcards</h1>
          <p className="text-gray-500 mt-1">
            {user ? `Welcome back, ${user.firstName}!` : "Welcome back!"} Review
            and manage your flashcards here.
          </p>
        </div>
        <Link
          href="/dashboard/flashcards/create"
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
          Create New Flashcard
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search flashcards..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-shrink-0">
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
            value={selectedDeck}
            onChange={(e) =>
              setSelectedDeck(
                e.target.value === "all" ? "all" : parseInt(e.target.value)
              )
            }>
            {decks.map((deck) => (
              <option key={deck.id} value={deck.id}>
                {deck.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <>
          {/* Empty State */}
          {filteredFlashcards.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
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
                No flashcards found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? "No flashcards match your search criteria."
                  : "Get started by creating a new flashcard."}
              </p>
              <div className="mt-6">
                <Link
                  href="/dashboard/flashcards/create"
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
                  Create New Flashcard
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Flashcard Viewer */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {selectedDeck === "all"
                      ? "All Flashcards"
                      : decks.find((d) => d.id === selectedDeck)?.title ||
                        "Selected Deck"}
                  </h2>
                  <div className="text-sm text-gray-500">
                    Card {currentCardIndex + 1} of {filteredFlashcards.length}
                  </div>
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="max-w-md w-full">
                    <Flashcard
                      front={filteredFlashcards[currentCardIndex]?.front || ""}
                      back={filteredFlashcards[currentCardIndex]?.back || ""}
                      isFlipped={isFlipped}
                      onFlip={setIsFlipped}
                      deckName={
                        selectedDeck === "all"
                          ? "All Decks"
                          : decks.find((d) => d.id === selectedDeck)?.title ||
                            "Selected Deck"
                      }
                      cardNumber={`${currentCardIndex + 1}/${
                        filteredFlashcards.length
                      }`}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevCard}
                    disabled={currentCardIndex === 0}
                    className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                      currentCardIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}>
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous
                  </button>

                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    {isFlipped ? "Show Question" : "Show Answer"}
                  </button>

                  <button
                    onClick={handleNextCard}
                    disabled={
                      currentCardIndex === filteredFlashcards.length - 1
                    }
                    className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                      currentCardIndex === filteredFlashcards.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}>
                    Next
                    <svg
                      className="ml-1.5 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Flashcards List */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">
                    All Flashcards
                  </h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {filteredFlashcards.map((card, index) => (
                    <motion.li
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${
                        index === currentCardIndex ? "bg-yellow-50" : ""
                      }`}
                      onClick={() => {
                        setCurrentCardIndex(index);
                        setIsFlipped(false);
                      }}>
                      <div className="flex justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {card.front}
                          </p>
                          <p className="text-sm text-gray-500 truncate mt-1">
                            {card.back}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {card.masteryLevel}% mastery
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Last reviewed: {formatDate(card.lastReviewed)}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
