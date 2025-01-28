import AdminSigninForm from "../../components/forms/AdminSigninForm";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminSigninPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Sign In</h1>
      <AdminSigninForm onSubmit={handleSubmit} />
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

export default AdminSigninPage;
