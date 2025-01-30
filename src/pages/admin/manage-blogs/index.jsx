import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useFetchBlogs from "@/utils/useFetchBlogs";
import BlogDeleteButton from "@/components/buttons/BlogDeleteButton";
import BlogUpdateButton from "@/components/buttons/BlogUpdateButton";
import BlogCreateButton from "@/components/buttons/BlogCreateButton";
import AdminNavbar from "@/components/navigation/AdminNavbar";

const BlogsPage = () => {
  const router = useRouter();
  const { blogs, loading, error: fetchError, setBlogs } = useFetchBlogs();
  const [error, setError] = useState(fetchError);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect to login page if token is not available
    }
  }, [router]);

  useEffect(() => {
    setError(fetchError);
  }, [fetchError]);

  useEffect(() => {
    console.log("Fetched blogs:", blogs); // Log fetched blogs
  }, [blogs]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredBlogs = Array.isArray(blogs) ? blogs : [];

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto py-8" style={{ maxWidth: "768px" }}>
        <h1 className="text-3xl mb-4">All Blogs</h1>
        <div className="mb-8">
          <BlogCreateButton />
        </div>
        {filteredBlogs.length === 0 ? (
          <p className="text-center">No blogs found</p>
        ) : (
          <div className="grid gap-4 grid-cols-1">
            {filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white border-gray-300 border-2 p-4 rounded-lg relative"
              >
                <h2 className="text-lg font-bold pb-3 border-b-2">
                  {blog.title}
                </h2>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-auto pb-3"
                />
                <p className="py-3 border-b-2">
                  <strong>Author:</strong> {blog.author}
                </p>
                <h3 className="text-lg font-bold p-3 bg-gray-200">
                  {blog.excerpt}
                </h3>
                <p className="py-3">{blog.content}</p>
                <div className="flex justify-between text-gray-600">
                  <p>Created At: {new Date(blog.createdAt).toLocaleString()}</p>
                </div>
                <div className="flex flex-row gap-4 w-full justify-end">
                  <BlogDeleteButton
                    blogId={blog._id}
                    onDeleteSuccess={() =>
                      setBlogs((prevBlogs) =>
                        prevBlogs.filter((b) => b._id !== blog._id)
                      )
                    }
                  />
                  <BlogUpdateButton slug={blog.slug} />{" "}
                  {/* Updated prop name */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
