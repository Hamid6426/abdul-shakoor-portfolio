import { useState } from "react";
import axios from "@/utils/axiosConfig";
import { useRouter } from "next/router";

const AdminLoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      if (response.data.success) {
        await login(email, password);
        router.push("/admin/dashboard");
      } else {
        console.error("Signin error:", response.data.message);
      }
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Sign In</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold">
            Email <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-800 font-semibold"
          >
            Password <span className="text-red-500">(required)</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <a href="/admin/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
