"use client";

import { useParams } from 'next/navigation';
import useFetchBlog from "../../../utils/useFetchBlog";

const BlogDetailPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blog, loading, error } = useFetchBlog(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.thumbnail} alt={blog.title} className="w-full mb-4" />
      <p className="text-lg text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;
