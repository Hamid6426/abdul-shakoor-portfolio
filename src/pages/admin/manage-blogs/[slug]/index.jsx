import { useState, useEffect } from 'react';
import axios from '@/utils/axiosConfig';
import { useRouter } from 'next/router';

const UpdateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    excerpt: '',
    content: '',
    author: ''
  });
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

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        thumbnail: blog.thumbnail,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/blogs/slug/${slug}`, formData); // Use slug here
      router.push('/admin/manage-blogs'); // Redirect to the blogs list page
    } catch (error) {
      setError('Failed to update blog');
      console.error('Failed to update blog:', error);
    }
  };
  
  if (loading) {
    return <div className="text-center text-gray-800 dark:text-gray-200">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 dark:text-red-400">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4" style={{ maxWidth: "768px" }}>
      <h1 className="text-3xl mb-4">Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            id="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogPage;
