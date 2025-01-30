import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '@/utils/axiosConfig'; // Import your axios instance if you have one

// Define or import the patchAdmin function
const patchAdmin = async (id, data) => {
  const response = await axiosInstance.patch(`/admins/${id}`, data);
  return response.data;
};

export default function PatchFullName() {
  const router = useRouter();
  const { id } = router.query; // Get admin ID from URL
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch admin data when component mounts
    const fetchAdmin = async () => {
      try {
        const response = await axiosInstance.get(`/admins/${id}`);
        const admin = response.data;
        if (admin && admin.email) {
          setFullName(admin.email);
        }
      } catch (err) {
        setError('Failed to fetch admin data');
      }
    };

    if (id) {
      fetchAdmin();
    }
  }, [id]);

  const handleChange = (e) => setFullName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await patchAdmin(id, { email: fullName });
      setSuccess('Email updated successfully!');
      setTimeout(() => router.push('/admin/dashboard'), 1500); // Redirect after success
    } catch (err) {
      console.error('Error updating email:', err);
      setError(err.response?.data?.error || 'An error occurred while updating the email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-full">
      <label htmlFor="fullName" className="block text-black dark:text-white">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={fullName}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded"
        required
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">Update Full Name</button>

      {success && <p className="text-green-500 mt-2">{success}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
