import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../utils/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token") || "",
  });

  useEffect(() => {
    // Fetch user info if token exists
    const fetchUser = async () => {
      if (auth.token) {
        try {
          const response = await axios.get("/auth/check");
          setAuth({ ...auth, user: response.data });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };
    fetchUser();
  }, [auth.token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/auth/signin", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setAuth({ token, user });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ user: null, token: "" });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
