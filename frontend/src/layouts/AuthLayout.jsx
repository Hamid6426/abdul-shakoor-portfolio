import React from 'react';
import MainNavbar from '../components/navigation/MainNavbar';
import MainFooter from '../components/navigation/MainFooter';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout w-full min-h-screen bg-gray-200">
      <MainNavbar />
      <main className="w-full max-w-md mx-auto p-6 my-12 bg-white rounded">
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default AuthLayout;
