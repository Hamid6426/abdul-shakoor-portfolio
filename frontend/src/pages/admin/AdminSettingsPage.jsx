import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const AdminSettingsPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account settings update logic here
  };

  return (
    <AdminLayout>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Settings</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminSettingsPage;
