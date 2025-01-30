import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/axiosConfig'; // Import the axios instance

const useFetchMails = () => {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axiosInstance.get('/mails');
        if (response.status === 200 && response.data.success) {
          setMails(response.data.data);
        } else {
          setError(response.data.message || 'An error occurred while fetching mails.');
        }
      } catch (error) {
        console.error('Failed to fetch mails:', error);
        setError(error.message || 'An error occurred while fetching mails.');
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.
  return { mails, loading, error, setMails };
};

export default useFetchMails;
