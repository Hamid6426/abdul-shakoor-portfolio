import { useState, useEffect } from 'react';
import axios from './../utils/axiosConfig';

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs');
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
};

export default useFetchBlogs;
