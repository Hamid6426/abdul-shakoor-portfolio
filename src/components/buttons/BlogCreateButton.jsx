// root/app/components/buttons/BlogCreateButton.jsx

import React from 'react';
import { useRouter } from 'next/router';

const BlogCreateButton = () => {
  const router = useRouter();

  const handleCreate = () => {
    // Redirect to the create blog page
    router.push('/admin/manage-blogs/create-blog');
  };

  return (
    <button 
      onClick={handleCreate} 
      className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    >
      Create New Blog
    </button>
  );
};

export default BlogCreateButton;
