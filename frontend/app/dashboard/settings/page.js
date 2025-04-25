"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";

export default function Settings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Settings
        </h1>
        <p className="mt-1 sm:mt-2 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <nav className="flex overflow-x-auto -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-yellow-500 text-yellow-600 bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 px-3 sm:px-6 border-b-2 font-medium text-xs sm:text-sm transition-all duration-200 ease-in-out whitespace-nowrap`}>
                <span className="text-base sm:text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-black shadow-lg transform hover:scale-105 transition-transform duration-200">
                  {user?.firstName?.charAt(0)}
                  {user?.lastName?.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2">
                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue={user?.firstName}
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue={user?.lastName}
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1 sm:space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue={user?.email}
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent rounded-lg sm:rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105 transition-all duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-800">
                  Change Password
                </h3>
                <p className="mt-1 sm:mt-2 text-sm text-yellow-700">
                  Update your password to keep your account secure.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent rounded-lg sm:rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105 transition-all duration-200">
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-800">
                  Email Notifications
                </h3>
                <p className="mt-1 sm:mt-2 text-sm text-yellow-700">
                  Manage your email notification preferences.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition duration-200">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="text-sm font-medium text-gray-900">
                      Study Reminders
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Receive reminders about your study sessions
                    </p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 bg-yellow-500">
                    <span className="sr-only">Use setting</span>
                    <span
                      className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition duration-200">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="text-sm font-medium text-gray-900">
                      Progress Updates
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Get weekly progress reports
                    </p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 bg-gray-200">
                    <span className="sr-only">Use setting</span>
                    <span
                      className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition duration-200">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="text-sm font-medium text-gray-900">
                      New Features
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Stay updated about new features
                    </p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 bg-yellow-500">
                    <span className="sr-only">Use setting</span>
                    <span
                      className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-800">
                  Study Preferences
                </h3>
                <p className="mt-1 sm:mt-2 text-sm text-yellow-700">
                  Customize your study experience.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="theme"
                    className="block text-sm font-medium text-gray-700">
                    Theme
                  </label>
                  <select
                    id="theme"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <select
                    id="language"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="timezone"
                    className="block text-sm font-medium text-gray-700">
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    className="mt-1 block w-full rounded-lg sm:rounded-xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm transition duration-200">
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent rounded-lg sm:rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105 transition-all duration-200">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
