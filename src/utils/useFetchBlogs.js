import { useState, useEffect } from 'react';
import axios from '@/utils/axiosConfig';

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs/get-all-blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.
  return { blogs, loading, error, setBlogs };
};

export default useFetchBlogs;
