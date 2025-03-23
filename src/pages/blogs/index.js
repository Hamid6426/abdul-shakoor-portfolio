import useFetchBlogs from "@/utils/useFetchBlogs";

const BlogPage = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading Blogs...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg">
          <h2 className="text-2xl font-semibold">Error: {error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">
        Latest Blogs
      </h1>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">
          No blogs available at the moment.
        </p>
      ) : (
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-6 w-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="w-full text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500 text-sm mt-2">
                Published on{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-3 text-gray-700">
                {blog.excerpt || blog.content.slice(0, 150)}...
              </p>
              <a
                href={`/blogs/${blog.slug}`}
                className="text-green-600 mt-4 inline-block font-medium"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
