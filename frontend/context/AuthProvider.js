"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  signIn as supaSignIn,
  signUp as supaSignUp,
  signOut as supaSignOut,
  getCurrentUser,
} from "flashnest-backend/authHelper";
import { initSupabase, getSupabase } from "flashnest-backend/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null); // Supabase Auth User
  const [userProfile, setUserProfile] = useState(null); // DB Profile
  const [isLoading, setIsLoading] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [error, setError] = useState(null);
  const isInitialized = useRef(false);

  // 👇 Initialize Supabase once
  useEffect(() => {
    if (!isInitialized.current) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        console.error("Missing Supabase env vars");
        setError("Auth service not configured. Check environment variables.");
        return;
      }

      initSupabase({
        url: supabaseUrl,
        key: supabaseKey,
        options: {
          auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
          },
        },
      });

      isInitialized.current = true;
    }
  }, []);

  // 👇 Check for existing session
  useEffect(() => {
    const checkSession = async () => {
      const supabase = getSupabase();
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.warn("Session check failed:", error.message);
        setUser(null);
      } else if (data?.session?.user) {
        console.log("Session found:", data.session.user);
        setUser(data.session.user);
      } else {
        console.log("No session found");
        setUser(null);
      }

      setTokenChecked(true);
    };

    if (isInitialized.current) checkSession();
  }, []);

  // 👇 Fetch profile + subscribe to auth changes
  useEffect(() => {
    if (!tokenChecked) return;

    const fetchProfile = async () => {
      try {
        const profile = await getCurrentUser();
        console.log("Profile fetched:", profile);
        setUserProfile(profile);
      } catch (err) {
        console.warn("Failed to fetch profile:", err.message);
        setUserProfile(null);
      }
    };

    if (user) {
      console.log("User exists, fetching profile");
      fetchProfile();
    }

    const supabase = getSupabase();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user);

      if (event === "SIGNED_OUT") {
        setUser(null);
        setUserProfile(null);
        router.replace("/login");
      } else if (event === "SIGNED_IN" && session) {
        setUser(session.user);
        try {
          const profile = await getCurrentUser();
          console.log("Profile fetched after sign in:", profile);
          setUserProfile(profile);
          console.log("Redirecting to dashboard...");
          router.replace("/dashboard");
        } catch (err) {
          console.warn("Profile fetch error:", err.message);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [tokenChecked, user, router]);

  // 👇 Signup method
  const signUp = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      const { session, profile } = await supaSignUp({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (!session) throw new Error("No session returned");
      setUser(session.user);
      setUserProfile(profile);
      router.replace("/dashboard");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  // 👇 Login method
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Attempting login...");

      const { session, profile } = await supaSignIn({ email, password });
      console.log("Login response:", { session, profile });

      if (!session) throw new Error("No session returned");

      setUser(session.user);
      setUserProfile(profile);
      console.log("Redirecting to dashboard...");
      router.replace("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // 👇 Logout method
  const logout = async () => {
    try {
      console.log("Attempting logout...");
      await supaSignOut();
      console.log("Logout successful");
    } catch (err) {
      console.error("Signout failed:", err.message);
    } finally {
      setUser(null);
      setUserProfile(null);
      router.replace("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        signUp,
        login,
        logout,
        isLoading,
        error,
        tokenChecked,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
