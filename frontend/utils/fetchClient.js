//const API = "http://localhost:8000/api"; //process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const API = process.env.NEXT_PUBLIC_API_URL;
export const fetchClient = async (endpoint, options = {}) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

  return fetch(`${API}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // ✅ Add token if exists
      ...(options.headers || {}), // 🔄 Allow override
    },
    ...options,
  }).then((res) => {
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  });
};
