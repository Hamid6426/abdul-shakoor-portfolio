import React from 'react';
import { useRouter } from 'next/router';

const BlogUpdateButton = ({ slug }) => {
  const router = useRouter();

  const handleUpdate = () => {
    // Redirect to the update blog page with the blog's slug
    router.push(`/admin/manage-blogs/${slug}`);
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
