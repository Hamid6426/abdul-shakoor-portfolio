import React from 'react';
import MainNavbar from '../components/navigation/MainNavbar';
import MainFooter from '../components/navigation/MainFooter';

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <MainNavbar />
      <main className="w-full mx-auto py-8 bg-gray-200">
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default UserLayout;
