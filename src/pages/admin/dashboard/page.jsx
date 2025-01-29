import React from 'react';
import AdminLayout from '../layout';

const AdminDashboardPage = () => {
  return (
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">Total Blogs</h2>
            <p className="text-2xl">{stats.blogs}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">Total Mails</h2>
            <p className="text-2xl">{stats.mails}</p>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboardPage;
