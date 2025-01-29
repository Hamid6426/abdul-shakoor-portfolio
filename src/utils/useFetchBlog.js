import { useState, useEffect } from 'react';
import axios from './axiosConfig';

const useFetchBlog = (id) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/get-blog/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  return { blog, loading, error };
};

export default useFetchBlog;

// const useFetchBlog = (slug) => {
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(`/blogs/${slug}`);
//         setBlog(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch blog:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchBlog();
//     }
//   }, [slug]);

//   return { blog, loading, error };
// };

// export default useFetchBlog;
