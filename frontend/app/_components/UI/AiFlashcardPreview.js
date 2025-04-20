import { useAi } from "@/context/AiContext";

export default function AiFlashcardPreview({ deckId }) {
  const {
    aiFlashcards,
    isLoading,
    error,
    saveFlashcards,
    previewFlashcards,
    setAiFlashcards,
  } = useAi();

  const handleAccept = async () => {
    const saved = await saveFlashcards(aiFlashcards, deckId);
    if (saved) {
      alert("✅ Flashcards saved!");
    }
  };

  if (isLoading) return <p>⏳ Generating flashcards...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!aiFlashcards.length) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">🧠 AI Generated Flashcards</h2>

      <ul className="space-y-2">
        {aiFlashcards.map((card, i) => (
          <li key={i} className="border p-3 rounded-md bg-gray-50">
            <strong>Q:</strong> {card.question} <br />
            <strong>A:</strong> {card.answer}
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          ✅ Accept & Save
        </button>

        <button
          onClick={() => setAiFlashcards([])}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          ♻️ Regenerate
        </button>
      </div>
    </div>
  );
}
