import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import DeckForm from "./DeckForm";
import { useStudy } from "@/context/StudyContext";
import { formatDate } from "@/utils/dateUtils";

export default function Deck({ deck, onDelete, type }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const { fetchDecks } = useStudy();

  // Get the deck ID, handling both id and _id properties
  const deckId = deck.id || deck._id;

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    if (confirmationInput !== deck.title) {
      setConfirmationError("The deck name doesn't match. Please try again.");
      return;
    }

    if (onDelete) {
      onDelete(deckId);
    }
    setIsDeleteModalOpen(false);
    setConfirmationInput("");
    setConfirmationError("");
  };

  // Handle edit success
  const handleEditSuccess = async () => {
    setIsEditModalOpen(false);
    await fetchDecks(); // Refresh the decks list
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-sm">
        <div className="p-6">
          {/* Deck Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {deck.title}
              </h3>
              {deck.category && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {deck.category}
                </span>
              )}
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {deck.flashcards?.length || 0} cards
            </span>
          </div>

          {/* Description */}
          {deck.description && (
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {deck.description}
            </p>
          )}

          {/* Created Date */}
          <div className="mt-4 py-3 border-t border-gray-100">
            <p className="text-sm text-gray-500">Created</p>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(deck.createdAt)}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex space-x-3">
            <Link
              href={`/dashboard/${
                type === "study" ? "study" : "decks"
              }/${deckId}/`}
              className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium text-center">
              View
            </Link>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium text-center">
              Edit
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-medium text-center">
              Delete
            </button>
          </div>
        </div>
      </motion.div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setConfirmationInput("");
          setConfirmationError("");
        }}
        title="Delete Deck">
        <div className="p-4">
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete this deck? This action cannot be
            undone.
          </p>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              To confirm, please type the deck name:{" "}
              <span className="font-bold">{deck.title}</span>
            </p>
            <input
              type="text"
              value={confirmationInput}
              onChange={(e) => {
                setConfirmationInput(e.target.value);
                setConfirmationError("");
              }}
              className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter deck name to confirm"
            />
            {confirmationError && (
              <p className="mt-2 text-sm text-red-600">{confirmationError}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                setIsDeleteModalOpen(false);
                setConfirmationInput("");
                setConfirmationError("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
              Cancel
            </button>
            <button
              onClick={handleDeleteConfirm}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Deck Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Deck">
        <DeckForm
          deck={deck}
          onSuccess={handleEditSuccess}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </>
  );
}
