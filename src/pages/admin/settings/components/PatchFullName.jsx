import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { patchAdmin } from '@/lib/services/patchAdmin';
import { getAdmin } from '@/lib/services/getAdmin';

export default function PatchFullName() {
  const router = useRouter();
  const { id } = router.query;
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch admin data when component mounts
    const fetchAdmin = async () => {
      try {
        const admin = await getAdmin(id);
        if (admin && admin.fullName) {
          setFullName(admin.fullName);
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

    if (!fullName) {
      setError('Full Name cannot be empty');
      return;
    }

    try {
      await patchAdmin(id, { fullName });
      setSuccess('Full name updated successfully!');
      setTimeout(() => router.push('/admin/dashboard'), 1500); // Redirect after success
    } catch (err) {
      setError(err.message);
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
