import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import BlogCard from '../../components/cards/BlogCard';
import useFetchBlogs from '../../hooks/useFetchBlogs';

const BlogsPage = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return <UserLayout>Loading...</UserLayout>;
  }

  if (error) {
    return <UserLayout>Error: {error.message}</UserLayout>;
  }

  return (
    <UserLayout>
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map(blog => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              thumbnail={blog.thumbnail}
              excerpt={blog.excerpt}
            />
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default BlogsPage;
