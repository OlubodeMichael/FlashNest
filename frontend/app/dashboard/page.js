"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthProvider";
import { useStudy } from "@/context/StudyContext";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useAuth();
  const { decks } = useStudy();

  // Example data - in a real app, this would come from an API
  const stats = [
    { label: "Total Flashcards", value: 126 },
    { label: "Cards Mastered", value: 84 },
    { label: "Study Streak", value: "5 days" },
    { label: "Time Studied", value: "24h 15m" },
  ];

  const recentDecks = [
    {
      id: 1,
      title: "Biology Fundamentals",
      cards: 42,
      mastered: 28,
      color: "bg-green-500",
      lastStudied: "Today",
    },
    {
      id: 2,
      title: "JavaScript Concepts",
      cards: 36,
      mastered: 22,
      color: "bg-yellow-500",
      lastStudied: "Yesterday",
    },
    {
      id: 3,
      title: "Spanish Vocabulary",
      cards: 48,
      mastered: 34,
      color: "bg-blue-500",
      lastStudied: "2 days ago",
    },
  ];

  return (
    <div className="overflow-auto">
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
            <Link href="/dashboard/flashcards">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm">
                Start Studying
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
          <Link href="/dashboard/decks">
            <button className="text-sm font-medium text-yellow-600 hover:text-yellow-500">
              View All Decks
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {decks.map((deck, index) => (
            <motion.div
              key={deck._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className={`h-2 ${deck.color}`}></div>
              <div className="p-5">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {deck.title}
                </h4>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{deck.cards} cards</span>
                  <span>Last studied: {deck.lastStudied}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{
                      width: `${(deck.mastered / deck.cards) * 100}%`,
                    }}></div>
                </div>
                <div className="mt-4 text-right text-sm text-gray-500">
                  {deck.mastered} of {deck.cards} mastered
                </div>
                <div className="mt-4 flex space-x-2">
                  <Link href={`/dashboard/decks/${deck.id}/edit`}>
                    <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded">
                      Edit
                    </button>
                  </Link>
                  <Link href={`/dashboard/decks/${deck.id}/study`}>
                    <button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                      Study
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Create New Deck Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 flex items-center justify-center p-5 h-64">
            <Link href="/dashboard/decks/new" className="text-center">
              <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h4 className="text-gray-800 font-medium mb-1">
                Create New Deck
              </h4>
              <p className="text-gray-500 text-sm">
                Start building a new flashcard deck
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
