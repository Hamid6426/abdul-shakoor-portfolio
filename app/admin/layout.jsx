import React from 'react';
import AdminNavbar from '../components/navigation/AdminNavbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout w-full flex">
      <div className='relative w-20'>
      <AdminNavbar />
      </div>
      <main className="min-h-screen h-full w-full bg-gray-200 p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;