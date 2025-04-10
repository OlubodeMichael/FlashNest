import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  }) => {};

  const login = async (email, password) => {};

  const logout = async () => {};
}
