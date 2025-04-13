"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthProvider";

export default function Decks() {
  const { user } = useAuth();
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, recent, mastered

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call
    const fetchDecks = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/decks');
        // const data = await response.json();

        // Mock data
        const mockDecks = [
          {
            id: 1,
            title: "JavaScript Fundamentals",
            description: "Core concepts of JavaScript programming",
            cardCount: 24,
            lastStudied: "2023-06-15",
            masteryLevel: 75,
            createdAt: "2023-05-10",
          },
          {
            id: 2,
            title: "React Hooks",
            description: "Understanding React hooks and their use cases",
            cardCount: 18,
            lastStudied: "2023-06-18",
            masteryLevel: 60,
            createdAt: "2023-05-22",
          },
          {
            id: 3,
            title: "CSS Flexbox & Grid",
            description: "Modern CSS layout techniques",
            cardCount: 15,
            lastStudied: "2023-06-10",
            masteryLevel: 85,
            createdAt: "2023-06-01",
          },
          {
            id: 4,
            title: "Next.js Basics",
            description: "Getting started with Next.js framework",
            cardCount: 12,
            lastStudied: "2023-06-20",
            masteryLevel: 40,
            createdAt: "2023-06-05",
          },
        ];

        setTimeout(() => {
          setDecks(mockDecks);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching decks:", error);
        setIsLoading(false);
      }
    };

    fetchDecks();
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
          <h1 className="text-2xl font-bold text-gray-800">Your Decks</h1>
          <p className="text-gray-500 mt-1">
            {user ? `Welcome back, ${user.firstName}!` : "Welcome back!"} Manage
            your flashcard decks here.
          </p>
        </div>
        <Link
          href="/dashboard/decks/create"
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
            placeholder="Search decks..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-shrink-0">
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
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
                <Link
                  href="/dashboard/decks/create"
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
                </Link>
              </div>
            </div>
          ) : (
            /* Decks Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDecks.map((deck) => (
                <motion.div
                  key={deck.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {deck.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {deck.cardCount} cards
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {deck.description}
                    </p>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Mastery</span>
                        <span className="text-xs font-medium text-gray-700">
                          {deck.masteryLevel}%
                        </span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-yellow-500 h-1.5 rounded-full"
                          style={{ width: `${deck.masteryLevel}%` }}></div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-gray-500">
                      Last studied: {formatDate(deck.lastStudied)}
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <Link
                        href={`/dashboard/decks/${deck.id}/study`}
                        className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Study
                      </Link>
                      <Link
                        href={`/dashboard/decks/${deck.id}/edit`}
                        className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
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
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Edit
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
