import { useState, useEffect } from 'react';
import axios from './../utils/axiosConfig';

const useFetchMails = () => {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get('/mails');
        setMails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch mails:', error);
        setLoading(false);
      }
    };

    fetchMails();
  }, []);

  return { mails, loading };
};

export default useFetchMails;
