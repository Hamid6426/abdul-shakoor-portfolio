import { useState, useEffect } from "react";
import useFetchMails from "@/utils/useFetchMails";
import axios from "@/utils/axiosConfig";
import { FaTrash } from "react-icons/fa";

const MailsPage = () => {
  const { mails, loading, error: fetchError, setMails } = useFetchMails();
  const [error, setError] = useState(fetchError);

  useEffect(() => {
    setError(fetchError);
  }, [fetchError]);

  useEffect(() => {
    console.log('Fetched mails:', mails); // Log fetched mails
  }, [mails]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/mails/${id}`);
      if (res.status === 200) {
        // Remove the deleted mail from the state to reflect the change
        setMails((prevMails) => prevMails.filter((mail) => mail._id !== id));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredMails = Array.isArray(mails.data) ? mails.data : [];

  return (
    <div className="container mx-auto p-4" style={{ maxWidth: "768px" }}>
      <h1 className="text-3xl mb-4">All Mails</h1>
      {filteredMails.length === 0 ? (
        <p className="text-center">No mails found</p>
      ) : (
        <div className="grid gap-4 grid-cols-1">
          {filteredMails.map((mail) => (
            <div key={mail._id} className="bg-white border-gray-300 border-2 p-4 rounded-lg">
              <h2 className="text-lg font-bold pb-3 border-b-2">
                {mail.firstName} {mail.lastName}
              </h2>
              <p className="py-3 border-b-2"><strong>Sender Email:</strong> {mail.email}</p>
              <h3 className="text-lg font-bold p-3 bg-gray-200">{mail.subject}</h3>
              <p className="py-3">{mail.message}</p>
              <div className="flex justify-between text-gray-600">
                <p>Sent At: {new Date(mail.sendAt).toLocaleString()}</p>
              </div>
              <div className="text-right mt-4 p-3 bg-gray-200">
                <button
                  onClick={() => handleDelete(mail._id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailsPage;
