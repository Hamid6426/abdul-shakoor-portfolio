"use client";

import useFetchBlogs from "../../utils/useFetchBlogs";

const BlogsPage = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={blog.thumbnail} alt={blog.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <p className="text-gray-700 text-base">{blog.excerpt}</p>
                <a
                  href={`/blogs/${blog._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
