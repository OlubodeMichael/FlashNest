"use client";

import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";
import {
  FiEdit2,
  FiLock,
  FiMail,
  FiUser,
  FiTrash2,
  FiShield,
  FiCheck,
  FiX,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function Account() {
  const { user, updateMe } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = (field) => {
    setEditingField(field);
    setFormData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleCancel = () => {
    setEditingField(null);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (editingField === "password") {
        if (formData.newPassword !== formData.confirmPassword) {
          alert("New passwords do not match");
          return;
        }
        if (formData.newPassword.length < 8) {
          alert("Password must be at least 8 characters long");
          return;
        }
        await updateMe({
          currentPassword: formData.currentPassword,
          password: formData.newPassword,
        });
      } else {
        await updateMe(formData);
      }
      setEditingField(null);
      setShowPassword(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error.message || "Failed to update. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Account Header */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 break-all">
                {user?.email}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-blue-50 rounded-lg w-fit">
              <FiShield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          {/* Name Section */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FiUser className="w-5 h-5 text-blue-600" />
                </div>
                {editingField === "name" ? (
                  <form onSubmit={handleSubmit} className="flex-1">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="First Name"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                        <FiCheck className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h3 className="font-medium text-gray-900">Name</h3>
                    <p className="text-sm text-gray-500 break-all">
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                )}
              </div>
              {editingField !== "name" && (
                <button
                  onClick={() => handleEdit("name")}
                  className="w-full sm:w-auto p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition">
                  <FiEdit2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Email Section */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FiMail className="w-5 h-5 text-purple-600" />
                </div>
                {editingField === "email" ? (
                  <form onSubmit={handleSubmit} className="flex-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Email"
                      required
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-3 py-1 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                        <FiCheck className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-sm text-gray-500 break-all">
                      {user?.email}
                    </p>
                  </div>
                )}
              </div>
              {editingField !== "email" && (
                <button
                  onClick={() => handleEdit("email")}
                  className="w-full sm:w-auto p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition">
                  <FiEdit2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Password Section */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <FiLock className="w-5 h-5 text-green-600" />
                </div>
                {editingField === "password" ? (
                  <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Current Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2 text-gray-400 hover:text-gray-600">
                          {showPassword ? (
                            <FiEyeOff className="w-5 h-5" />
                          ) : (
                            <FiEye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="New Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2 text-gray-400 hover:text-gray-600">
                          {showPassword ? (
                            <FiEyeOff className="w-5 h-5" />
                          ) : (
                            <FiEye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Confirm New Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2 text-gray-400 hover:text-gray-600">
                          {showPassword ? (
                            <FiEyeOff className="w-5 h-5" />
                          ) : (
                            <FiEye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
                        <FiCheck className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h3 className="font-medium text-gray-900">Password</h3>
                    <p className="text-sm text-gray-500">
                      Last changed 2 months ago
                    </p>
                  </div>
                )}
              </div>
              {editingField !== "password" && (
                <button
                  onClick={() => handleEdit("password")}
                  className="w-full sm:w-auto p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition">
                  <FiEdit2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Delete Account Section */}
          <div className="p-4 sm:p-5 md:p-6 bg-red-50 rounded-b-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <FiTrash2 className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium text-red-900">Delete Account</h3>
                  <p className="text-sm text-red-600">
                    Permanently delete your account and all data
                  </p>
                </div>
              </div>
              <button
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete your account? This action cannot be undone."
                    )
                  ) {
                    setIsLoading(true);
                    // Handle account deletion
                  }
                }}
                disabled={isLoading}>
                {isLoading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
