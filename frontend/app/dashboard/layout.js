"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { useStudy } from "@/context/StudyContext";
import LoadingSpinner from "@/app/_components/LoadingSpinner";

export default function DashboardLayout({ children }) {
  const { user, logout, isLoading, fetchUser } = useAuth();
  const { fetchDecks } = useStudy();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUserOnLoad = async () => {
      await fetchUser();
      await fetchDecks();
    };
    fetchUserOnLoad();
  }, []);

  // Get user initials for profile display
  const getUserInitials = () => {
    if (user && user.firstName && user.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    }
    return "MO"; // Default to Michael Olubode initials
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isLinkActive = (path) => {
    if (path === "/dashboard") {
      // For dashboard overview, only match exact path
      return pathname === path;
    }
    // For other routes, check if the pathname starts with the path
    return pathname.startsWith(path);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "My Decks",
      path: "/dashboard/decks",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },

    {
      name: "Generate Flashcards",
      path: "/dashboard/generate",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Account Settings",
      path: "/dashboard/account",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* Mobile menu button - positioned on the right */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar - always on the left */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-40 w-64 bg-white shadow">
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex-shrink-0 px-4 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
                <span className="font-bold text-base text-black">FN</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-black">
                FlashNest
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isLinkActive(item.path)
                    ? "bg-yellow-50 text-yellow-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}>
                <span
                  className={`mr-3 ${
                    isLinkActive(item.path)
                      ? "text-yellow-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User section */}
          <div className="flex-shrink-0 border-t border-gray-200">
            <div className="px-4 py-4">
              <p className="text-sm font-medium text-gray-900">Welcome back</p>
              <p className="text-sm text-gray-500 truncate">
                {user
                  ? `${user.firstName} ${user.lastName}`
                  : "Michael Olubode"}
              </p>
            </div>
            <div className="px-4 pb-4">
              <button
                onClick={handleLogout}
                className="group flex items-center w-full px-2 py-2 text-sm font-medium text-red-700 rounded-md hover:bg-red-50">
                <svg
                  className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - appears on the right side when open */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-64 bg-white shadow transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200 ease-in-out`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex-shrink-0 px-4 py-4 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
                <span className="font-bold text-base text-black">FN</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-black">
                FlashNest
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isLinkActive(item.path)
                    ? "bg-yellow-50 text-yellow-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}>
                <span
                  className={`mr-3 ${
                    isLinkActive(item.path)
                      ? "text-yellow-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User section */}
          <div className="flex-shrink-0 border-t border-gray-200">
            <div className="px-4 py-4">
              <p className="text-sm font-medium text-gray-900">Welcome back</p>
              <p className="text-sm text-gray-500 truncate">
                {user
                  ? `${user.firstName} ${user.lastName}`
                  : "Michael Olubode"}
              </p>
            </div>
            <div className="px-4 pb-4">
              <button
                onClick={handleLogout}
                className="group flex items-center w-full px-2 py-2 text-sm font-medium text-red-700 rounded-md hover:bg-red-50">
                <svg
                  className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 h-screen">
        <main className="h-full overflow-auto p-4 md:p-8">{children}</main>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
