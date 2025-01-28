// root/app/components/forms/BlogCreateForm.jsx

import React, { useState } from 'react';
import axios from '../../utils/axiosConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const BlogCreateForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/blogs', {
        title,
        thumbnail,
        excerpt,
        content,
        author: 'Admin'  // Assuming author is "Admin" or replace with desired default
      });
      setTitle('');
      setThumbnail('');
      setExcerpt('');
      setContent('');
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.response.data.message || 'An error occurred while creating the blog.');
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-lg max-h-full overflow-auto">
      {error && <p className="w-full mb-4 text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full mx-auto mt-4">
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
        <div className="flex justify-between mt-12">
          <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Blog</button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreateForm;
