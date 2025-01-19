import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import AdminSignupForm from "../../../components/forms/AdminSignupForm";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";
import axios from "../../../utils/axiosConfig";

const AdminSignupPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (fullName, email, password) => {
    try {
      await axios.post('/auth/signup', { fullName, email, password });
      // Automatically log the user in after signup
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Sign Up</h1>
      <AdminSignupForm onSubmit={handleSubmit} />
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="/admin/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default AdminSignupPage;
