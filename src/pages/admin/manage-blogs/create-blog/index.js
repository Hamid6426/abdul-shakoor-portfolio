import { useState } from 'react';
import axios from '@/utils/axiosConfig';
import { useRouter } from 'next/router';

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    excerpt: '',
    content: '',
    author: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/blogs/create-blog', formData);
      router.push('/admin/manage-blogs'); // Redirect to the blogs list page
    } catch (error) {
      console.warn('Failed to create blog:', error);
    }
  };

  return (
    <div className="container mx-auto p-4" style={{ maxWidth: "768px" }}>
      <h1 className="text-3xl mb-4">Create New Blog</h1>
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
