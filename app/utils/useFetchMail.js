import { useState, useEffect } from 'react';
import axios from './axiosConfig';

const useFetchMail = (id) => {
  const [mail, setMail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const response = await axios.get(`/mails/${id}`);
        setMail(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch mail:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchMail();
    }
  }, [id]);

  return { mail, loading };
};

export default useFetchMail;
