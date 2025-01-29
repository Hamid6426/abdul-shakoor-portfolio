// root/app/components/buttons/BlogUpdateButton.jsx

import React from 'react';
import { useRouter } from 'next/router';

const BlogUpdateButton = ({ blogId }) => {
  const router = useRouter();

  const handleUpdate = () => {
    // Redirect to the update blog page with the blog ID
    router.push(`/admin/manage-blogs/update-blog/${blogId}`);
  };

  return (
    <button 
      onClick={handleUpdate} 
      className="bg-blue-500 text-white px-2 py-1 rounded"
    >
      Update
    </button>
  );
};

export default BlogUpdateButton;
