import { useState } from 'react';
import { useRouter } from 'next/router';
import { patchAdmin } from '@/lib/services/patchAdmin';

export default function PatchEmail() {
  const router = useRouter();
  const { id } = router.query; // Get admin ID from URL
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await patchAdmin(id, { email });
      setSuccess('Email updated successfully!');
      setTimeout(() => router.push('/admin/dashboard'), 1500); // Redirect after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-full">
      <label htmlFor="email" className="block text-black dark:text-white">New Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded"
        required
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">Update Email</button>
      
      {success && <p className="text-green-500 mt-2">{success}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
