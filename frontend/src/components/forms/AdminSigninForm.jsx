import React, { useState } from 'react';

const AdminSigninForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 font-semibold">
          Email <span className="text-red-500">(required)</span>
        </label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="mt-1 p-2 w-full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-800 font-semibold">
          Password <span className="text-red-500">(required)</span>
        </label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mt-1 p-2 w-full border border-gray-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400">
        Sign In
      </button>
    </form>
  );
};

export default AdminSigninForm;
