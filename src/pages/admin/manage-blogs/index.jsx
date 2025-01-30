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
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect to login page if token is not available
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
    <div className="w-full text-white bg-gray-900">
      <AdminNavbar />
      <div className="bg-gray-900 w-full mx-auto py-8" style={{ maxWidth: "768px" }}>
        <h1 className="text-4xl font-bold mb-6">All Blogs</h1>
        <div className="mb-8">
          <BlogCreateButton />
        </div>
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-lg font-medium">No blogs found</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-gray-800 border-gray-300 border-2 p-6 rounded-lg relative"
              >
                <h2 className="text-2xl font-semibold pb-3">{blog.title}</h2>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-auto pb-3 rounded"
                />
            
                <h3 className="py-2">{blog.excerpt.substring(0, 100)}...</h3>
                <hr/>

                <p className="py-3">{blog.content.substring(0, 100)}...</p>
                <p className="py-3">
                  <span className="font-bold">Author:</span> {blog.author}
                </p>
                <hr/>
                <div className="flex justify-between text-gray-500 py-3">
                  <p className="text-sm">Created At: {new Date(blog.created_at).toLocaleString()}</p>
                </div>
                <div className="flex flex-row gap-4 w-full justify-end mt-4">
                  <BlogDeleteButton
                    blogId={blog._id}
                    onDeleteSuccess={() =>
                      setBlogs((prevBlogs) =>
                        prevBlogs.filter((b) => b._id !== blog._id)
                      )
                    }
                  />
                  <BlogUpdateButton slug={blog.slug} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
