"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const learningWords = [
    "faster",
    "smarter",
    "effectively",
    "confidently",
    "anywhere",
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % learningWords.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-gray-900">
      {/* Navigation - Simplified with better spacing */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/95 backdrop-blur-sm py-4 px-6 fixed w-full z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.98 }}
              className="h-9 w-9 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-bold text-sm">FN</span>
            </motion.div>
            <span className="font-bold text-xl tracking-tight">FlashNest</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-10 font-medium mr-8">
              {["Features", "Why FlashNest", "Pricing"].map((item, i) => (
                <motion.a
                  key={i}
                  href={i === 0 ? "#features" : i === 1 ? "#why" : "#"}
                  className="hover:text-yellow-600 transition-colors text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -1 }}>
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex">
              <motion.a
                href="/login"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors mr-3 inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}>
                Sign In
              </motion.a>
              <motion.a
                href="/signup"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-5 rounded-lg transition-colors shadow-sm inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}>
                Sign Up
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            {!mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}>
              <div className="px-6 py-4 space-y-3">
                {["Features", "Why FlashNest", "Pricing"].map((item, i) => (
                  <a
                    key={i}
                    href={i === 0 ? "#features" : i === 1 ? "#why" : "#"}
                    className="block py-2 text-gray-700 hover:text-yellow-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item}
                  </a>
                ))}
                <div className="pt-3 mt-3 border-t border-gray-100 flex flex-col space-y-3">
                  <a
                    href="/login"
                    className="block py-2 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </a>
                  <a
                    href="/signup"
                    className="block py-2 text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Consistent Brand Yellow */}
      <header className="pt-32 pb-16 px-6 md:px-8 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzMCkiIHN0cm9rZS1vcGFjaXR5PSIuMSI+PHBhdGggZD0iTTYwIDBINFYtMzBoNTZ6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA2MCAzMCkiIHN0cm9rZS1vcGFjaXR5PSIuMDUiPjxwYXRoIGQ9Ik02MCAwSDRWLTMwaDU2eiIvPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDAgNjAgMzApIiBzdHJva2Utb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik02MCAwSDRWLTMwaDU2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content Side */}
            <motion.div
              className="md:col-span-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              {/* Label Badge */}
              <motion.div
                className="inline-block mb-6 border border-yellow-300 bg-yellow-100 px-4 py-1.5 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}>
                <span className="font-medium text-xs text-yellow-700 mr-2">
                  NEW
                </span>
                <span className="text-xs text-yellow-700">
                  AI-Powered Learning System
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}>
                Memorize <span className="text-yellow-500">anything</span> with
                the science of recall
              </motion.h1>

              {/* Subtitle with Animated Word */}
              <motion.div
                className="text-lg md:text-xl font-medium text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}>
                Learn{" "}
                <span className="relative">
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-200 rounded"></span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      className="inline-block text-yellow-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}>
                      {learningWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>{" "}
                with FlashNest's breakthrough spaced repetition system
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="grid grid-cols-3 gap-3 mb-8 p-4 bg-white shadow-sm rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}>
                <div className="text-center p-2">
                  <div className="text-yellow-600 font-bold text-2xl">2.5x</div>
                  <div className="text-gray-600 text-xs">Faster Learning</div>
                </div>
                <div className="text-center p-2 border-x border-gray-100">
                  <div className="text-yellow-600 font-bold text-2xl">95%</div>
                  <div className="text-gray-600 text-xs">
                    Long-term Retention
                  </div>
                </div>
                <div className="text-center p-2">
                  <div className="text-yellow-600 font-bold text-2xl">50k+</div>
                  <div className="text-gray-600 text-xs">Active Students</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={staggerContainer}
                initial="initial"
                animate="animate">
                <motion.button
                  className="bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  variants={fadeIn}>
                  Get Started Free
                </motion.button>
                <motion.button
                  className="bg-white text-gray-700 border border-gray-200 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  variants={fadeIn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right App Demo Side */}
            <motion.div
              className="md:col-span-6 pt-8 md:pt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
              <div className="relative">
                {/* Highlight Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 to-yellow-400/10 rounded-2xl blur-xl"></div>

                {/* Browser Window Mock */}
                <motion.div
                  className="relative bg-white backdrop-blur-xl rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5 }}>
                  {/* Browser Controls */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center border-b border-gray-200">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto bg-white px-3 py-1 rounded text-xs text-gray-500 flex items-center border border-gray-200">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      app.flashnest.com
                    </div>
                  </div>

                  {/* App UI Mockup */}
                  <div className="p-6">
                    {/* Top Toolbar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="bg-yellow-400 h-10 w-10 rounded-lg flex items-center justify-center text-gray-900 font-bold mr-3">
                          FN
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium">
                            Chemistry 101
                          </div>
                          <div className="text-yellow-600 text-xs">
                            32 cards • Mastery: 68%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-gray-100 p-2 rounded-lg">
                          <svg
                            className="h-5 w-5 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                          </svg>
                        </button>
                        <button className="bg-gray-100 p-2 rounded-lg">
                          <svg
                            className="h-5 w-5 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Redesigned Flashcard with improved UX */}
                    <div className="w-full h-72 mb-6 relative perspective-[1000px] select-none">
                      <div className="w-full h-full relative">
                        {/* Front of Card (Question) */}
                        <motion.div
                          className="w-full h-full absolute rounded-xl shadow-lg overflow-hidden"
                          initial={false}
                          animate={{
                            rotateY: isFlipped ? 180 : 0,
                            zIndex: isFlipped ? 0 : 10,
                          }}
                          transition={{ duration: 0.6 }}
                          onClick={() => setIsFlipped(true)}
                          style={{
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",
                          }}>
                          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 flex flex-col">
                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-6">
                              <span className="text-xs font-medium text-yellow-900 bg-yellow-200/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                Chemistry
                              </span>
                              <span className="text-xs font-medium text-yellow-900 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                12/32
                              </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex-grow flex flex-col justify-center items-center text-center">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                What is the atomic number of Carbon?
                              </h3>

                              {/* Hint (Optional) */}
                              <p className="text-yellow-800/80 text-sm mb-8">
                                Think about the periodic table position
                              </p>

                              {/* Interaction Indicator */}
                              <div className="mt-auto flex items-center text-yellow-900/70 gap-1.5">
                                <svg
                                  className="h-5 w-5"
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
                          className="w-full h-full absolute rounded-xl shadow-lg overflow-hidden"
                          initial={{ rotateY: 180 }}
                          animate={{
                            rotateY: isFlipped ? 0 : -180,
                            zIndex: isFlipped ? 10 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          onClick={() => setIsFlipped(false)}
                          style={{
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",
                          }}>
                          <div className="w-full h-full bg-white p-8 flex flex-col">
                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-6">
                              <span className="text-xs font-medium text-yellow-900 bg-yellow-200/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                Chemistry
                              </span>
                              <span className="text-xs font-medium text-yellow-900 bg-yellow-400/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                12/32
                              </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex-grow flex flex-col justify-center items-center text-center">
                              <span className="bg-yellow-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                                <span className="text-3xl font-bold text-yellow-600">
                                  6
                                </span>
                              </span>

                              <p className="text-gray-700 text-sm mb-4 max-w-xs">
                                Carbon has 6 protons in its nucleus, giving it
                                an atomic number of 6. It's the 6th element in
                                the periodic table.
                              </p>

                              {/* Tags - Optional */}
                              <div className="flex gap-2 mb-6">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  Element
                                </span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  Periodic Table
                                </span>
                              </div>

                              {/* Interaction Indicator */}
                              <div className="mt-auto flex items-center text-gray-500 gap-1.5">
                                <svg
                                  className="h-5 w-5"
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

                    {/* Rating Buttons */}
                    <div className="flex justify-between">
                      <motion.button
                        className="flex-1 bg-red-50 text-red-600 py-3 mr-2 rounded-lg border border-red-100"
                        whileHover={{ backgroundColor: "#fee2e2" }}>
                        Difficult
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-yellow-50 text-yellow-600 py-3 mx-2 rounded-lg border border-yellow-100"
                        whileHover={{ backgroundColor: "#fef3c7" }}>
                        Good
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-green-50 text-green-600 py-3 ml-2 rounded-lg border border-green-100"
                        whileHover={{ backgroundColor: "#d1fae5" }}>
                        Easy
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,80C672,64,768,32,864,21.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </header>

      {/* Features Section - Refined with better spacing and hierarchy */}
      <section id="features" className="py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 mb-4 bg-yellow-100 rounded-full text-yellow-700 font-medium text-xs uppercase tracking-wider">
              Powerful features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need to learn effectively
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FlashNest combines proven learning techniques with modern
              technology to help you remember more in less time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards with consistent styling */}
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                ),
                title: "Create Smart Flashcards",
                description:
                  "Add questions and answers instantly with rich formatting. Group cards into decks for organized study sessions.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                ),
                title: "Intelligent Organization",
                description:
                  "Organize cards by subject, topic, or project. Advanced tagging system makes finding and reviewing specific content simple.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Adaptive Study Mode",
                description:
                  "Our spaced repetition system adjusts to your learning pace, focusing on cards you find challenging and reducing review of mastered content.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <motion.div
                  className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}>
                  <div className="text-yellow-500">{feature.icon}</div>
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Feature highlight - Cleaner visualization */}
          <motion.div
            className="mt-20 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}>
            <div className="grid md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 mb-4 bg-green-50 rounded-full text-green-600 font-medium text-xs uppercase tracking-wider">
                  Popular Feature
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Progress Tracking & Analytics
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Visualize your learning journey with detailed analytics. Track
                  mastery over time and identify areas that need more attention.
                </p>
                <ul className="space-y-3">
                  {[
                    "Daily streaks and goals",
                    "Performance by deck",
                    "Memory retention analytics",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}>
                      <svg
                        className="h-4 w-4 text-yellow-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 flex items-center justify-center p-8">
                <motion.div
                  className="w-full max-w-md bg-white rounded-lg shadow-sm p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-sm">Your Progress</h4>
                    <div className="text-xs bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full">
                      Last 7 days
                    </div>
                  </div>
                  <div className="h-40 flex items-end justify-between px-1">
                    {[30, 45, 25, 60, 75, 50, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-7 flex flex-col items-center"
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}>
                        <motion.div
                          className={`w-full bg-yellow-${
                            height > 50 ? "400" : "300"
                          } rounded-t-sm`}
                          style={{ height: `${height}%` }}
                          whileHover={{
                            backgroundColor: "#fbbf24",
                          }}></motion.div>
                        <div className="text-xs mt-2 text-gray-400">
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why FlashNest Section - Cleaner layout */}
      <section id="why" className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 mb-4 bg-yellow-100 rounded-full text-yellow-700 font-medium text-xs uppercase tracking-wider">
              Why choose us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Designed for modern learners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most flashcard apps are bloated or boring. FlashNest keeps things
              fast, intuitive, and learner-first.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-9">
                {[
                  {
                    title: "Minimalist Design",
                    description:
                      "Clean interface eliminates distractions so you can focus on learning.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Mobile-First Approach",
                    description:
                      "Study anywhere, anytime—your progress syncs across all devices.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Science-Backed Methods",
                    description:
                      "Built on proven learning techniques to maximize retention and recall.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}>
                    <div className="mr-5 flex-shrink-0 bg-yellow-50 p-3 rounded-lg">
                      <div className="text-yellow-500">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 relative">
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-lg shadow-sm text-sm">
                  #1 Choice
                </div>
                <h3 className="text-xl font-bold mb-5 text-gray-900">
                  Simple UI, Powerful Results
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "FlashNest has the perfect balance of simplicity and power.
                  It's helped me ace exams without the overwhelm of complicated
                  study apps."
                </p>
                <div className="flex items-center">
                  <div className="h-11 w-11 bg-gray-100 rounded-full overflow-hidden"></div>
                  <div className="ml-3">
                    <div className="font-medium text-sm">Sarah K.</div>
                    <div className="text-xs text-gray-500">Medical Student</div>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Cleaner with better focus */}
      <section className="py-24 px-6 md:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to supercharge your learning?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their study
            routine with FlashNest.
          </p>
          <div className="bg-gray-800/70 p-10 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8 text-left mb-10">
              {[
                {
                  icon: "🔒",
                  title: "Secure",
                  desc: "Protected with user authentication",
                },
                {
                  icon: "☁️",
                  title: "Cloud-Based",
                  desc: "Access your cards from any device",
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Optimized for quick study sessions",
                },
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="text-2xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors shadow-md text-base">
              Start Learning For Free
            </button>
            <p className="text-gray-400 mt-4 text-xs">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Simplified for clarity */}
      <footer className="bg-gray-50 py-16 px-6 md:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <div className="h-8 w-8 bg-yellow-400 rounded-md flex items-center justify-center">
                  <span className="font-bold text-sm">FN</span>
                </div>
                <span className="font-bold text-lg">FlashNest</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">Gamify Your Learning</p>
              <div className="flex space-x-3">
                {["twitter", "facebook", "instagram"].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-gray-900">
                    <div className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Testimonials", "FAQ"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-yellow-600 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © 2023 FlashNest. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
