"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

export default function Login() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    await login(email, password);
    router.push("/dashboard");
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:px-16 md:py-12 bg-white h-screen overflow-hidden">
        <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 mb-8 md:mb-12 mt-8 md:mt-0">
            <div className="h-12 w-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-bold text-base text-black">FN</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-black">
              FlashNest
            </span>
          </Link>

          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl font-bold mb-2 text-black">Welcome Back</h1>
            <p className="text-base text-gray-700">
              Enter your email and password to access your account.
            </p>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 text-base text-gray-700"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 text-base"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-yellow-600 hover:text-yellow-500 font-medium">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3.5 px-4 rounded-lg transition-colors shadow-sm text-base mt-4">
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="my-8">
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-sm text-gray-500">
                  Or Login With
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() =>
                  (window.location.href =
                    "http://localhost:8000/api/users/google")
                }>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-black font-medium">Google</span>
              </button>
            </div>
          </div>

          <div className="mb-4 text-center">
            <p className="text-sm text-gray-700">
              Don't Have An Account?{" "}
              <Link
                href="/signup"
                className="text-yellow-600 hover:text-yellow-500 font-medium">
                Register Now
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 py-4">
          <p>Copyright © 2023 FlashNest. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Showcase */}
      <div className="hidden md:block w-1/2 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-indigo-600/60 z-10"></div>

        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center p-12 lg:p-16">
          <div className="max-w-lg mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Effortlessly learn with flashcards
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Log in to access your personalized flashcard decks and continue
              your learning journey.
            </p>

            {/* Flashcard Preview */}
            <div className="relative mt-4 flex justify-center">
              <motion.div
                className="w-64 h-40 bg-white rounded-xl shadow-xl text-gray-900 p-5 absolute z-20"
                initial={{ rotate: -6, y: 0 }}
                animate={{ rotate: -6, y: [0, -5, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-yellow-800 bg-yellow-200/90 px-3 py-0.5 rounded-full">
                    Biology
                  </span>
                  <span className="text-xs text-gray-500">3/24</span>
                </div>
                <div className="text-center mt-3">
                  <h3 className="font-bold">What is photosynthesis?</h3>
                  <div className="absolute bottom-3 left-0 right-0 text-xs text-gray-500 flex justify-center">
                    <span>Tap to flip</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-64 h-40 bg-yellow-400 rounded-xl shadow-xl text-gray-900 p-5 absolute z-10"
                initial={{ rotate: 4, y: 20 }}
                animate={{ rotate: 4, y: [20, 15, 20] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-purple-800 bg-purple-200/90 px-3 py-0.5 rounded-full">
                    Chemistry
                  </span>
                  <span className="text-xs text-gray-800">12/30</span>
                </div>
              </motion.div>

              <motion.div
                className="w-64 h-40 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-xl text-gray-900 p-5 absolute z-0"
                initial={{ rotate: 10, y: 40 }}
                animate={{ rotate: 10, y: [40, 35, 40] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-blue-800 bg-blue-200/90 px-3 py-0.5 rounded-full">
                    Physics
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="mt-28 bg-indigo-700/30 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 bg-yellow-400 rounded-full text-black flex items-center justify-center font-bold">
                  87%
                </div>
                <div>
                  <h4 className="font-medium text-white">
                    Higher retention rate
                  </h4>
                  <p className="text-indigo-200 text-xs">
                    compared to traditional learning methods
                  </p>
                </div>
              </div>
              <div className="text-xs leading-relaxed text-indigo-100">
                FlashNest users remember more information for longer periods of
                time using our scientifically proven spaced repetition system.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
