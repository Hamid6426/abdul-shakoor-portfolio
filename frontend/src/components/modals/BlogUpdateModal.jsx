import React, { useState, useEffect } from 'react';
import axios from '../../utils/axiosConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const BlogUpdateModal = ({ blogId, onSuccess, onClose }) => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/${blogId}`);
        const { title, thumbnail, excerpt, content } = response.data;
        setTitle(title);
        setThumbnail(thumbnail);
        setExcerpt(excerpt);
        setContent(content);
      } catch (err) {
        setError('Failed to fetch blog data.');
      }
    };

    fetchBlog();

    // Prevent body scroll when the modal is open
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/blogs/${blogId}`, {
        title,
        thumbnail,
        excerpt,
        content,
        author: 'Admin'  // Assuming author is "Admin" or replace with desired default
      });
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.response.data.message || 'An error occurred while updating the blog.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-h-full overflow-auto">
        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-gray-700">Thumbnail URL</label>
            <input 
              type="text" 
              id="thumbnail" 
              value={thumbnail} 
              onChange={(e) => setThumbnail(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="excerpt" className="block text-gray-700">Excerpt</label>
            <input 
              type="text" 
              id="excerpt" 
              value={excerpt} 
              onChange={(e) => setExcerpt(e.target.value)} 
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700">Content</label>
            <ReactQuill 
              id="content"
              value={content}
              onChange={setContent}
              className="mt-1 p-2 w-full border rounded h-64"
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogUpdateModal;
  