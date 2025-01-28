"use client";

import { useRouter } from 'next/navigation';
import useFetchBlog from '../../../utils/useFetchBlog';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { blog, loading, error } = useFetchBlog(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.thumbnail} alt={blog.title} className="w-full h-auto mb-4" />
      <div className="text-lg leading-relaxed">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogPage;
