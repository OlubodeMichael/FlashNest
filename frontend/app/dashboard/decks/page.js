"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthProvider";
import { useStudy } from "@/context/StudyContext";
import Deck from "@/app/_components/deck";
import Modal from "@/app/_components/Modal";
import DeckForm from "@/app/_components/DeckForm";

export default function Decks() {
  const { user } = useAuth();
  const { fetchDecks, decks, isLoading, deleteDeck } = useStudy();

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, recent, mastered
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    const fetchDecksOnLoad = async () => {
      await fetchDecks();
    };
    fetchDecksOnLoad();
  }, []);

  // Filter decks based on search term and filter option
  const filteredDecks = decks.filter((deck) => {
    const matchesSearch =
      deck.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deck.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "all") return matchesSearch;
    if (filter === "recent")
      return (
        matchesSearch &&
        new Date(deck.lastStudied) >
          new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      );
    if (filter === "mastered") return matchesSearch && deck.masteryLevel >= 80;

    return matchesSearch;
  });

  const handleCreateDeck = () => {
    setSelectedDeck(null);
    setIsModalOpen(true);
  };

  const handleEditDeck = (deck) => {
    setSelectedDeck(deck);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDeck(null);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    setSelectedDeck(null);
  };

  const handleDeleteDeck = async (deckId) => {
    // Implement the delete logic here
    await deleteDeck(deckId);
    console.log("Deleting deck:", deckId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Your Decks</h1>
          <p className="text-gray-500 mt-1">
            {user ? `Welcome back, ${user.firstName}!` : "Welcome back!"} Manage
            your flashcard decks here.
          </p>
        </div>
        <button
          onClick={handleCreateDeck}
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
          Create New Deck
        </button>
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
            placeholder="Search decks..."
            className="block w-full pl-10 text-gray-800 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-shrink-0">
          <select
            className="block w-full pl-3 pr-10 py-2 text-gray-800 text-base border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Decks</option>
            <option value="recent">Recently Studied</option>
            <option value="mastered">Mastered</option>
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
          {filteredDecks.length === 0 ? (
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
                No decks found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? "No decks match your search criteria."
                  : "Get started by creating a new deck."}
              </p>
              <div className="mt-6">
                <button
                  onClick={handleCreateDeck}
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
                  Create New Deck
                </button>
              </div>
            </div>
          ) : (
            /* Decks Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDecks.map((deck) => (
                <motion.div
                  key={deck._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}>
                  <Deck deck={deck} onDelete={handleDeleteDeck} />
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Create/Edit Deck Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedDeck ? "Edit Deck" : "Create New Deck"}>
        <DeckForm
          deck={selectedDeck}
          onSuccess={handleSuccess}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
