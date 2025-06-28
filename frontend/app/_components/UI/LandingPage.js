"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LandingPage() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "Smart Learning",
      description: "AI-powered flashcards that adapt to your learning pace",
      icon: "🧠",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Study Anywhere",
      description: "Sync across all your devices, study offline",
      icon: "📱",
      color: "from-green-500 to-blue-600",
    },
    {
      title: "Track Progress",
      description: "Detailed analytics to monitor your learning journey",
      icon: "📊",
      color: "from-orange-500 to-red-600",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="max-w-md mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="font-bold text-white text-lg">FN</span>
            </div>
            <span className="font-bold text-xl text-gray-900">FlashNest</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            Download
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl mb-6">
              <span className="text-6xl">📚</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Master Any Subject with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                Smart Flashcards
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your learning with AI-powered flashcards that adapt to
              your pace and help you remember better.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl">
              Download for Free
            </motion.button>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2">
                <span>🍎</span>
                <span>App Store</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2">
                <span>🤖</span>
                <span>Google Play</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose FlashNest?
          </motion.h2>

          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatureIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center h-full flex flex-col justify-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${features[currentFeatureIndex].color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {features[currentFeatureIndex].icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {features[currentFeatureIndex].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {features[currentFeatureIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentFeatureIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentFeatureIndex
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-8">
            See FlashNest in Action
          </motion.h2>

          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-600 font-medium">
                    Screenshot {index}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-sm opacity-90">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm opacity-90">Flashcards Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">4.8★</div>
                <div className="text-sm opacity-90">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Users Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Medical Student</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "FlashNest helped me ace my medical exams! The AI adapts perfectly
              to my learning style and the spaced repetition is incredibly
              effective."
            </p>
            <div className="flex text-yellow-400 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>⭐</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of students who are already learning smarter with
              FlashNest.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl">
              Start Learning Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-sm">FN</span>
            </div>
            <span className="font-bold text-gray-900">FlashNest</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            © 2024 FlashNest. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
