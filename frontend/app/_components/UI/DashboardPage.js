"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthProvider";
import { useStudy } from "@/context/StudyContext";
import Link from "next/link";
import Deck from "@/app/_components/deck";

export default function DashboardPage() {
  const { user } = useAuth();
  const { decks, deleteDeck } = useStudy();
  const totalFlashcards = decks.reduce(
    (total, deck) => total + deck?.flashcards.length,
    0
  );

  // Example data - in a real app, this would come from an API
  const stats = [
    { label: "Total Flashcards", value: totalFlashcards },
    { label: "Cards Mastered", value: 84 },
    //{ label: "Study Streak", value: "5 days" },
    { label: "Time Studied", value: "24h 15m" },
  ];

  const handleDeleteDeck = async (deckId) => {
    // Implement the delete logic here
    await deleteDeck(deckId);
  };

  return (
    <div className="min-h-screen overflow-y-auto pb-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, {user ? user.firstName : "Michael"}!
          </h2>
          <p className="text-gray-500">
            You have 15 cards due for review today.
          </p>
          <div className="mt-6">
            <Link href="/dashboard/decks">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm">
                Start Learning
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <h3 className="text-lg font-medium text-gray-800 mb-4">Your Progress</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-5">
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Decks */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800">Recent Decks</h3>
          {decks.length > 0 && (
            <Link href="/dashboard/decks">
              <button className="text-sm font-medium text-yellow-600 hover:text-yellow-500">
                View All Decks
              </button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decks.map((deck, index) => (
            <motion.div
              key={deck._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
              <Deck deck={deck} mode="study" onDelete={handleDeleteDeck} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
