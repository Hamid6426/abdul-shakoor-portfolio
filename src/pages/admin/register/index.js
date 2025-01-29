import { useState } from "react"; // Import useState
import axios from "@/utils/axiosConfig"; // Import axios
import { useRouter } from "next/router"; // Import useRouter from next/router

const AdminRegisterPage = () => {
  const router = useRouter(); // Use useRouter instead of useNavigate

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const adminData = { fullName, email, password }; // Create an adminData object
      const response = await axios.post('/auth/register', adminData); // axios.post with adminData
      if (response.data.success) {
        router.push("/admin/dashboard"); // Use router.push instead of navigate
      } else {
        console.error("Signup error:", response.data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Sign Up</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-800 font-semibold"
          >
            Full Name <span className="text-red-500">(required)</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold">
            Email <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w/full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-green-400"
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
            className="mt-1 p-2 w/full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="/admin/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegisterPage;
