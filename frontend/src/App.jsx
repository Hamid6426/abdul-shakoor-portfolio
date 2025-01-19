import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/user/HomePage";
import AboutPage from "./pages/user/AboutPage";
import BlogsPage from "./pages/user/BlogsPage";
import ContactPage from "./pages/user/ContactPage";
import BlogDetailPage from "./pages/user/BlogDetailPage";

import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminSigninPage from "./pages/admin/auth/AdminSigninPage";
import AdminSignupPage from "./pages/admin/auth/AdminSignupPage";
import AdminManageBlogsPage from "./pages/admin/AdminManageBlogsPage";
import AdminManageMailsPage from "./pages/admin/AdminManageMailsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import AdminSupportPage from "./pages/admin/AdminSupportPage";

import ProtectedRoute from "./components/routing/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blogs/:blogTitle" element={<BlogDetailPage />} />

        {/* Admin Routes */}
        <Route path="admin/signin" element={<AdminSigninPage />} />
        <Route path="admin/signup" element={<AdminSignupPage />} />
        
        <Route path="admin" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="manage-blogs" element={<AdminManageBlogsPage />} />
          <Route path="manage-mails" element={<AdminManageMailsPage />} />
          <Route path="account-settings" element={<AdminSettingsPage />} />
          <Route path="support" element={<AdminSupportPage />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
  