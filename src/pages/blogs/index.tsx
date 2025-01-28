  // components/BlogList.tsx
  import { useEffect, useState } from "react";
  import Navbar from "src/components/Navbar";
  import Footer from "src/components/Footer";
  import Link from "next/link"

  type Blog = {
    _id: string;
    title: string;
    mainHeading: string;
    subHeadingOne: string;
    subHeadingTwo: string;
    paragraphOne: string;
    paragraphTwo: string;
    imageLink: string;
    imageCaption: string;
    published: boolean;
    author: string;
    createdAt: string;
    updatedAt: string;
  };

  const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        const response = await fetch("/api/blogs/get-blogs");
        const data = await response.json();
        setBlogs(data);
      };
      fetchBlogs();
    }, []);

    return (
      <>
        <Navbar />
        <div className="w-full max-w-[1024px] mx-auto">
          <h1 className="text-3xl font-bold text-center my-6">My Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {blogs.map((blog) => (
              <div key={blog._id} className="w-full border p-4 rounded-lg shadow-md">
                <div className="w-full rounded-xl">
                  <img
                    src={blog.imageLink}
                    alt={blog.title}
                    className="w-full rounded-xl mb-4"
                  />
                </div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">{blog.mainHeading}</p>
                <p className="text-gray-500 mt-2">{blog.subHeadingOne}</p>
                <p className="text-gray-500 mt-2">{blog.subHeadingTwo}</p>
                <div className="mt-4">
                  <p className="text-gray-700">{blog.paragraphOne}</p>
                  <p className="text-gray-700 mt-2">{blog.paragraphTwo}</p>
                </div>
                <div className="mt-4 flex gap-3 flex-col">
                  <span className="text-sm text-gray-500">
                    Author: {blog.author}
                  </span>
                  <Link 
                    className="w-full py-2 text-center rounded-lg text-white font-bold hover:bg-blue-600 bg-blue-500"
                    href={`/blogs/${blog._id}`}>
                  Read More
                </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default BlogList;
