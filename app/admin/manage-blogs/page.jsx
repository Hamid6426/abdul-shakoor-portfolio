"use client";

import { useState } from 'react';
import useFetchBlogs from '../../utils/useFetchBlogs';
import BlogDeleteButton from '../../components/buttons/BlogDeleteButton';
import BlogCard from '../../components/cards/BlogCard';

const AdminManageBlogsPage = () => {
  const { blogs, loading, error } = useFetchBlogs();
  const [currentBlogId, setCurrentBlogId] = useState(null);

  const handleReload = () => {
    window.location.reload();
  };

  const openBlogById = () => {
    console.log('Create a new blog');
  };

  const openBlog = (id) => {
    setCurrentBlogId(id);
    console.log('Open blog with id:', id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>
      <button onClick={openBlogById} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Create New Blog</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs && blogs.map(blog => (
          <div key={blog._id} className="relative">
            <BlogCard
              title={blog.title}
              thumbnail={blog.thumbnail}
              excerpt={blog.excerpt}
              onClick={() => openBlog(blog._id)}
            />
            <BlogDeleteButton blogId={blog._id} onDeleteSuccess={handleReload} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminManageBlogsPage;
