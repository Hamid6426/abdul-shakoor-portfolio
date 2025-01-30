import { useState, useEffect } from "react";
import useFetchMails from "@/utils/useFetchMails";
import axiosInstance from "@/utils/axiosConfig";
import { FaTrash } from "react-icons/fa";
import AdminNavbar from "@/components/navigation/AdminNavbar";

const MailsPage = () => {
  const { mails, loading: mailsLoading, error: mailError, setMails } = useFetchMails();
  const [error, setError] = useState(mailError);

  useEffect(() => {
    setError(mailError);
  }, [mailError]);

  useEffect(() => {
    console.log('Fetched mails:', mails); // Log fetched mails
  }, [mails]);

  const handleDelete = async (id) => {
    try {
      const res = await axiosInstance.delete(`/mails/${id}`);
      if (res.status === 200) {
        // Remove the deleted mail from the state to reflect the change
        setMails((prevMails) => prevMails.filter((mail) => mail.id !== id)); // Ensure correct mail ID reference
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (mailsLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-white">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-red-500">Error: {error}</div>
    </div>;
  }

  const filteredMails = Array.isArray(mails) ? mails : [];

  return (
    <>
    <AdminNavbar/>
    <div className="py-8 w-full">
    <div className="container mx-auto p-4 max-w-xl min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-4xl mb-8 font-bold text-center">All Mails</h1>
      {filteredMails.length === 0 ? (
        <p className="text-center text-gray-400">No mails found</p>
      ) : (
        <div className="space-y-4">
          {filteredMails.map((mail) => (
            <div key={mail.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold pb-2 border-b border-gray-700">
                {mail.firstName} {mail.lastName}
              </h2>
              <p className="py-2 border-b border-gray-700">
                <strong>Sender Email:</strong> {mail.email}
              </p>
              <h3 className="text-xl font-bold py-2">{mail.subject}</h3>
              <p className="py-2">{mail.message}</p>
              <div className="flex justify-between text-gray-400 text-sm">
                <p>Sent At: {new Date(mail.sendAt).toLocaleString()}</p>
              </div>
              <div className="text-right mt-4">
                <button
                  onClick={() => handleDelete(mail.id)} // Ensure correct mail ID reference
                  className="text-red-400 hover:text-red-600 transition duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default MailsPage;
