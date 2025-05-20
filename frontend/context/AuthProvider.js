"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchClient } from "@/utils/fetchClient";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:8000/api"; //process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/me`);

      setUser(res.data.user);
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  }) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/signup`, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        }),
      });

      localStorage.setItem("jwt", res.token);
      await fetchUser();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("jwt", res.token);

      await fetchUser();
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/logout`, {
        method: "POST",
      });

      localStorage.removeItem("jwt");
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/forgotPassword`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      // ✅ No fetchUser() here
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token, password, passwordConfirm) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/resetPassword/${token}`, {
        method: "PATCH",
        body: JSON.stringify({ password, passwordConfirm }),
      });

      await fetchUser(); // ✅ Fetch new user status after reset
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      // ✅ Removed erroneous setError(null);
    }
  };

  const updateMe = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/updateMe`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      await fetchUser();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteMe = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchClient(`/users/deleteMe`, {
        method: "DELETE",
      });

      setUser(null); // ✅ Explicitly set user state to null after deletion
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (passwordCurrent, password, passwordConfirm) => {
    try {
      setLoading(true);
      setError(null);

      await fetchClient("/users/updateMyPassword", {
        method: "PATCH",
        body: JSON.stringify({
          passwordCurrent,
          password,
          passwordConfirm,
        }),
      });

      localStorage.removeItem("jwt");
      setUser(null);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /*
  useEffect(() => {
    fetchUser();
  }, []);

  */

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        signup,
        login,
        logout,
        fetchUser,
        forgotPassword,
        resetPassword,
        updateMe,
        deleteMe,
        updatePassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthProvider;
