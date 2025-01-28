import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

// Define the Blog type
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

type BlogPageProps = {
  blog: Blog | null;
};

const BlogPage = ({ blog }: BlogPageProps) => {
  const router = useRouter();

  // Show loading while waiting for the page to load
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If the blog doesn't exist, show an error
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1024px] mx-auto my-8">
        <h1 className="text-3xl font-bold text-center my-6">{blog.title}</h1>
        <div className="mb-8">
          <img
            src={blog.imageLink}
            alt={blog.title}
            className="w-full rounded-xl mb-4"
          />
          <p className="text-lg text-gray-600">{blog.mainHeading}</p>
          <p className="text-gray-500 mt-2">{blog.subHeadingOne}</p>
          <p className="text-gray-500 mt-2">{blog.subHeadingTwo}</p>
          <div className="mt-4">
            <p className="text-gray-700">{blog.paragraphOne}</p>
            <p className="text-gray-700 mt-2">{blog.paragraphTwo}</p>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-500">Author: {blog.author}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Fetch the blog data at request time
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Get the `id` from the URL

  // Fetch the blog data using the ID (you may need to adjust the API URL)
  const res = await fetch(`http://localhost:3000/api/blogs/get-blogs`);
  const data = await res.json();
  
  // Find the blog with the matching ID
  const blog = data.find((blog: Blog) => blog._id === id) || null;

  // Return the blog data as props
  return { props: { blog } };
};

export default BlogPage;
