import { useState } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/router";

const AdminLoginPage = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // for loading state
  const [errorMessage, setErrorMessage] = useState(''); // to show error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // disable submit button
    setErrorMessage(''); // reset error messages

    try {
      const loginData = { email, password };
      const response = await axiosInstance.post('/admins/login', loginData);

      const data = response.data;

      if (data.admin) {
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        console.log('Token saved to localStorage:', data.token);
        router.push("/admin/dashboard"); // redirect to dashboard
      } else {
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setIsLoading(false); // re-enable button after request
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Admin Login
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800 dark:bg-gray-800 shadow-xl rounded-lg">
        <div className="mb-6">
          <label htmlFor="email" className="text-white block text-lg dark:text-gray-300 mb-2">
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
          <label htmlFor="password" className="text-white block text-lg dark:text-gray-300 mb-2">
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

        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400 transition duration-200"
          disabled={isLoading} // disable while loading
        >
          {isLoading ? "Logging In..." : "Log In"}
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
