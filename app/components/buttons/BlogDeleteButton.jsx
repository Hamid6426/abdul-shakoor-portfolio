// root/app/components/buttons/BlogDeleteButton.jsx

import React from 'react';
import axios from '../../utils/axiosConfig';

const BlogDeleteButton = ({ blogId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${blogId}`);
      onDeleteSuccess();
    } catch (err) {
      console.error('Failed to delete blog:', err);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default BlogDeleteButton;
