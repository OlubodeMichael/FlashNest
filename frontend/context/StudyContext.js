"use client";

import { createContext, useContext, useState, useEffect } from "react";

const StudyContext = createContext();

function StudyProvider({ children }) {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState(null); // optional: current selected deck
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

  const testAi = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [
            {
              role: "user",
              content: "What is the meaning of life?",
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to test AI");
      }

      const data = await res.json();
      setAiResponse(data.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDecks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch decks");
      }

      const data = await res.json();
      setDecks(data.data.decks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDeck = async (deckId) => {
    setDeck(null);
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks/${deckId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch deck");
      }

      const data = await res.json();
      setDeck(data.data.deck);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const createDeck = async (deckData) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(deckData),
      });

      if (!res.ok) {
        throw new Error("Failed to create deck");
      }

      const data = await res.json();
      await fetchDecks();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setError(null);
    }
  };

  const updateDeck = async (deckId, deckData) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks/${deckId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(deckData),
      });

      if (!res.ok) {
        throw new Error("Failed to update deck");
      }

      const data = await res.json();
      await fetchDecks();
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setError(null);
    }
  };

  const deleteDeck = async (deckId) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks/${deckId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to delete deck");
      }
      await fetchDecks();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setError(null);
    }
  };

  const fetchFlashcards = async (deckId) => {
    setFlashcards([]); // ✅ clear first
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(`${apiUrl}/decks/${deckId}/flashcards`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch flashcards");
      }

      const data = await res.json();
      setFlashcards(data.data.flashcards); // ✅ just the array
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createFlashcard = async (deckId, flashcardData) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${apiUrl}/decks/${deckId}/flashcards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(flashcardData),
      });

      if (!res.ok) throw new Error("Failed to create flashcard");

      await fetchFlashcards(deckId);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateFlashcard = async (deckId, flashcardId, flashcardData) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(
        `${apiUrl}/decks/${deckId}/flashcards/${flashcardId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(flashcardData),
        }
      );

      if (!res.ok) throw new Error("Failed to update flashcard");

      await fetchFlashcards(deckId);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFlashcard = async (deckId, flashcardId) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(
        `${apiUrl}/decks/${deckId}/flashcards/${flashcardId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!res.ok) throw new Error("Failed to delete flashcard");

      await fetchFlashcards(deckId);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StudyContext.Provider
      value={{
        decks,
        deck,
        flashcards,
        isLoading,
        error,
        aiResponse,
        fetchDecks,
        fetchDeck,
        createDeck,
        updateDeck,
        deleteDeck,
        fetchFlashcards,
        createFlashcard,
        updateFlashcard,
        deleteFlashcard,
        testAi,
      }}>
      {children}
    </StudyContext.Provider>
  );
}

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error("useStudy must be used within a StudyProvider");
  }
  return context;
};

export default StudyProvider;
