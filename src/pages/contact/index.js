import { useState } from "react";
import axios from "@/utils/axiosConfig";
import Hero from "@/components/Hero";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("/mails", {
        firstName,
        lastName,
        email,
        subject,
        message,
      });

      setStatus("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div>
      <div className="my-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border mb-8 border-gray-200 max-w-2xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-lg"
        >
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Contact Dr. Abdul Shakoor
          </h1>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          {/* Status Message */}
          {status && (
            <p
              className={`mb-4 text-center text-lg ${
                status.includes("success")
                  ? "text-green-500"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {status}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400 transition duration-200"
          >
            Send Message
          </button>
        </form>
        <section className="w-full bg-blue-400 text-white py-12 text-center rounded-lg">
          <p className="text-xl font-semibold leading-relaxed">
            Get in touch with me on Gmail
          </p>
          <a
            href="mailto:your-email@gmail.com"
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg  transition duration-300"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
