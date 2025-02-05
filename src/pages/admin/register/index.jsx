import { useState } from "react";
import axios from "@/utils/axiosConfig";
import { useRouter } from "next/router";

const AdminRegisterPage = () => {
  const router = useRouter();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // for loading state
  const [errorMessage, setErrorMessage] = useState(''); // to show error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // disable submit button
    setErrorMessage(''); // reset error messages

    try {
      const adminData = { fullName, email, password };
      const response = await axios.post('/admins/register', adminData);

      if (response.data.admin) {
        router.push("/admin/login"); // redirect to login
      } else {
        setErrorMessage(response.data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.response?.data?.error || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false); // re-enable button after request
    }
  }
  

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Admin Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800 dark:bg-gray-800 shadow-xl rounded-lg">
        <div className="mb-6">
          <label htmlFor="fullName" className="text-white block text-lg dark:text-gray-300 mb-2">
            Full Name <span className="text-red-500">(required)</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            required
          />
        </div>
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
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="/admin/login" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegisterPage;
