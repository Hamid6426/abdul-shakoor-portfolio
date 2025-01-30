import { useEffect } from "react";
import { useRouter } from "next/router";
import AdminNavbar from "@/components/navigation/AdminNavbar";
import useFetchBlogs from "@/utils/useFetchBlogs";
import useFetchMails from "@/utils/useFetchMails";

const AdminDashboardPage = () => {
  const router = useRouter();
  const { blogs, loading: blogsLoading, error: blogsError } = useFetchBlogs();
  const { mails, loading: mailsLoading, error: mailsError } = useFetchMails();
  
  // Check for token in localStorage and redirect to login if not found
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login'); // Redirect to login page if token is not found
    }
  }, [router]);

  const stats = {
    blogs: blogs.length,
    mails: mails.length,
  };

  if (blogsLoading || mailsLoading) {
    return <div>Loading...</div>;
  }

  if (blogsError || mailsError) {
    return <div>Error: {blogsError?.message || mailsError?.message}</div>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
        {/* Dashboard Title */}
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {[
            { title: "Total Blogs", value: stats.blogs },
            { title: "Total Mails", value: stats.mails },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-700"
            >
              <h2 className="text-lg font-semibold text-gray-300">
                {item.title}
              </h2>
              <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
