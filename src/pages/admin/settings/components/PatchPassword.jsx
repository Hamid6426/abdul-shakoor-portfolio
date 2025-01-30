import { useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '@/utils/axiosConfig'; // Import your axios instance if you have one

// Define or import the AdminPassword function
const AdminPassword = async (id, currentPassword, newPassword) => {
  const response = await axiosInstance.patch(`/admins/${id}`, {
    currentPassword,
    newPassword
  });
  return response.data;
};

export default function PatchPassword() {
  const router = useRouter();
  const { id } = router.query; // Get admin ID from URL
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await AdminPassword(id, currentPassword, newPassword);
      setSuccess('Password updated successfully!');
      setTimeout(() => router.push('/admin/dashboard'), 1500); // Redirect after success
    } catch (err) {
      console.error('Error updating password:', err);
      setError(err.response?.data?.error || 'An error occurred while updating the password.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-full bg-gray-800">
      <label htmlFor="currentPassword" className="block text-black dark:text-white text-white ">Current Password</label>
      <input
        type="password"
        id="currentPassword"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="mt-1 p-2 w-full border rounded text-black dark:text-white"
        required
      />
      
      <label htmlFor="newPassword" className="block text-black dark:text-white mt-2 text-white ">New Password</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="mt-1 p-2 w-full border rounded text-black dark:text-white"
        required
      />

      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded ">Update Password</button>
      
      {success && <p className="text-green-500 mt-2">{success}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
