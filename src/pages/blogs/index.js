import useFetchBlogs from '@/utils/useFetchBlogs';

const BlogPage = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Loading Blogs...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <h2 className="text-2xl font-semibold">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      
      {blogs.length === 0 ? (
        <p className="text-center">No blogs available at the moment.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 text-sm mt-2">
              Published on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-3">{blog.excerpt || blog.content.slice(0, 150)}...</p>
            <a href={`/blogs/${blog.slug}`} className="text-green-600 mt-2 inline-block">Read more</a>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
