import { useState, useEffect } from 'react';
import axios from '@/utils/axiosConfig';

const useFetchMails = () => {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get('/mails');
        setMails(response.data);
      } catch (error) {
        console.error('Failed to fetch mails:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.
  return { mails, loading, error, setMails };
};

export default useFetchMails;
