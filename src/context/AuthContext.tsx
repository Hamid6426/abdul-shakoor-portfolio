import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface AuthContextType {
  user: { id: string; email: string } | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Validate the token (JWT decoding or API request can go here)
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token
      setUser({ id: decoded.id, email: decoded.email });
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const decoded = JSON.parse(atob(token.split(".")[1]));
    setUser({ id: decoded.id, email: decoded.email });
    router.push("/admin/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
