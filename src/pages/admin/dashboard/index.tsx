import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const DashboardPage = () => {
  const [adminData, setAdminData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (!token) {
          setError('Unauthorized! Redirecting to login...');
          router.push('/admin/login'); // Redirect to login if token is missing
          return;
        }

        // Verify token and fetch admin details
        const response = await axios.get('/api/admins/verify-token', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { adminId } = response.data;

        // Fetch admin's full details
        const adminResponse = await axios.get(`/api/admins/${adminId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminData(adminResponse.data); // Set admin data
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Session expired or unauthorized access.');
        localStorage.removeItem('token'); // Clear invalid token
        router.push('/admin/login'); // Redirect to login page
      }
    };

    fetchAdminData();
  }, [router]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {adminData && (
        <div>
          <h2>Welcome, {adminData.fullName}</h2>
          <p>Email: {adminData.email}</p>
          {/* Add more dashboard content or features here */}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
