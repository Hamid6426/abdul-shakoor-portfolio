import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from '@/utils/axiosConfig';

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/slug/${slug}`);
        setBlog(response.data);
      } catch (error) {
        setError("Failed to load blog");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="text-center text-gray-800 dark:text-gray-200">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 dark:text-red-400">Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-4">
      {/* Blog Thumbnail */}
      <div className="mb-6">
        <img src={blog?.thumbnail} alt={blog?.title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{blog?.title}</h1>

      {/* Author and Date */}
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        By <span className="font-semibold">{blog?.author}</span> | Published on {new Date(blog?.createdAt).toLocaleDateString()}
      </p>

      {/* Excerpt */}
      {blog?.excerpt && (
        <div className="mt-4 text-gray-700 dark:text-gray-300">
          <strong>Excerpt:</strong> <p>{blog?.excerpt}</p>
        </div>
      )}

      {/* Full Content */}
      <div className="mt-8 text-gray-800 dark:text-gray-200">
        <p>{blog?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
