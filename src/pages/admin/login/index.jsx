import { useState } from "react";
import axios from "@/utils/axiosConfig";
import { useRouter } from "next/router";

const AdminLoginPage = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/auth/login', { email, password });

      if (response.data.success) {
        // Store token in localStorage or cookie
        localStorage.setItem('token', response.data.token);
        router.push("/admin/dashboard");
      } else {
        setErrorMessage(response.data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.response?.data?.error || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Admin Sign In
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg">
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg text-gray-700 dark:text-gray-300 mb-2">
            Email <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg text-gray-700 dark:text-gray-300 mb-2">
            Password <span className="text-red-500">(required)</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400 transition duration-200"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <a href="/admin/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
