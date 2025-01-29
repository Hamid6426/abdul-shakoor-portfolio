import { useState } from 'react';
import { useRouter } from 'next/router';
import { patchAdminPassword } from '@/lib/services/patchAdmin';

export default function PatchPassword() {
  const router = useRouter();
  const { id } = router.query;
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await patchAdminPassword(id, currentPassword, newPassword);
      setSuccess('Password updated successfully!');
      setTimeout(() => router.push('/admin/dashboard'), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <label htmlFor="currentPassword" className="block text-gray-700">Current Password</label>
      <input
        type="password"
        id="currentPassword"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="mt-1 p-2 w-full border rounded"
        required
      />
      
      <label htmlFor="newPassword" className="block text-gray-700 mt-2">New Password</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="mt-1 p-2 w-full border rounded"
        required
      />

      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">Update Password</button>
      
      {success && <p className="text-green-500 mt-2">{success}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
