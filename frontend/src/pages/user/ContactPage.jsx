import React, { useState } from 'react';
import UserLayout from '../../layouts/UserLayout';
import axios from "../../utils/axiosConfig";

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('/mails', {
        firstName,
        lastName,
        email,
        subject,
        message
      });
      setStatus('Message sent successfully!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <UserLayout>
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Contact Dr. Abdul Shakoor</h1>
        
        {/* Status Message */}
        {status && (
          <p className={`mb-4 text-center text-lg ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <label htmlFor="firstName" className="block text-lg text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="lastName" className="block text-lg text-gray-700 mb-2">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-lg text-gray-700 mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </UserLayout>
  );
};

export default ContactPage;
