"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Flashcard({
  front,
  back,
  onFlip,
  isFlipped: externalIsFlipped = false,
  className = "",
  deckName = "Deck",
  cardNumber = "1/10",
  tags = [],
  hint = "",
}) {
  const [internalIsFlipped, setInternalIsFlipped] = useState(false);

  // Use external state if provided, otherwise use internal state
  const isFlipped =
    externalIsFlipped !== undefined ? externalIsFlipped : internalIsFlipped;

  const handleFlip = () => {
    if (externalIsFlipped === undefined) {
      setInternalIsFlipped(!internalIsFlipped);
    }
    if (onFlip) {
      onFlip(!isFlipped);
    }
  };

  return (
    <div
      className={`w-[400px] h-[280px] relative perspective-[1000px] select-none ${className}`}
      onClick={handleFlip}>
      <div className="w-full h-full relative">
        {/* Front of Card (Question) */}
        <motion.div
          className="w-full h-full absolute rounded-2xl shadow-lg overflow-hidden"
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 0,
            zIndex: isFlipped ? 0 : 10,
          }}
          transition={{ duration: 0.6 }}
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}>
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 flex flex-col">
            {/* Card Header */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-yellow-900 bg-yellow-200/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                {deckName}
              </span>
              <span className="text-xs font-medium text-yellow-900 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                {cardNumber}
              </span>
            </div>

            {/* Main Content Container - Takes up all available space */}
            <div className="flex-1 flex items-center justify-center">
              {/* Card Content */}
              <div className="w-full max-w-sm text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug tracking-tight mb-4">
                  {front}
                </h3>

                {/* Hint (Optional) */}
                {hint && (
                  <div className="bg-yellow-300/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-yellow-900/90 text-sm font-medium">
                      Hint: {hint}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Interaction Indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center text-yellow-900/70 gap-2 bg-yellow-300/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                <span className="text-xs font-medium">
                  Tap to reveal answer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of Card (Answer) */}
        <motion.div
          className="w-full h-full absolute rounded-2xl shadow-lg overflow-hidden"
          initial={{ rotateY: 180 }}
          animate={{
            rotateY: isFlipped ? 0 : -180,
            zIndex: isFlipped ? 10 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}>
          <div className="w-full h-full bg-white p-6 flex flex-col">
            {/* Card Header */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-yellow-900 bg-yellow-200/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                {deckName}
              </span>
              <span className="text-xs font-medium text-yellow-900 bg-yellow-400/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                {cardNumber}
              </span>
            </div>

            {/* Main Content Container - Takes up all available space */}
            <div className="flex-1 flex items-center justify-center">
              {/* Card Content */}
              <div className="w-full max-w-sm text-center">
                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                  {back}
                </p>

                {/* Tags - Optional */}
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Interaction Indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center text-gray-500 gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-medium">
                  Tap to return to question
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
