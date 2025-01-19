import React from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';

const BlogDetailPage = () => {
  const { blogTitle } = useParams();

  // Dummy blog data for illustration purposes
  const blog = {
    title: blogTitle,
    thumbnail: "/path/to/thumbnail.jpg",
    content: "This is the full content of the blog post..."
  };

  return (
    <UserLayout>
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.thumbnail} alt={blog.title} className="w-full mb-4" />
        <p className="text-lg text-gray-700">{blog.content}</p>
      </div>
    </UserLayout>
  );
};

export default BlogDetailPage;
