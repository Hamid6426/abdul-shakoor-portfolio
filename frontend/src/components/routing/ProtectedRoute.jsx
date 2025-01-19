import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { auth } = useAuth();
  return auth.token ? <Outlet /> : <Navigate to="/admin/signin" />;
};

export default ProtectedRoute;
