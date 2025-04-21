// context/AiContext.js
"use client";

import { createContext, useContext, useState } from "react";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [aiFlashcards, setAiFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

  const previewFlashcards = async ({ topic, text, file, count }) => {
    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      if (file) formData.append("file", file);
      if (topic) formData.append("topic", topic);
      if (text) formData.append("text", text);
      formData.append("count", count);

      const res = await fetch(`${apiUrl}/ai/preview-flashcards`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setAiFlashcards(data.flashcards);
      } else {
        setError(data.message || "AI failed to generate");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const saveFlashcards = async (aiFlashcards, deckId) => {
    try {
      const response = await fetch(
        `${apiUrl}/decks/${deckId}/flashcards/bulk`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ flashcards: aiFlashcards }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        console.log("✅ Flashcards saved:", data.data.flashcards);
        setAiFlashcards([]);
        return data.data.flashcards;
      } else {
        console.error("❌ Error saving flashcards:", data.message);
        return null;
      }
    } catch (err) {
      console.error("❌ Network or server error:", err);
      return null;
    }
  };

  return (
    <AiContext.Provider
      value={{
        aiFlashcards,
        isLoading,
        error,
        previewFlashcards,
        saveFlashcards,
      }}>
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
