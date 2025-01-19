import React from 'react';

const ShowMailModal = ({ show, handleClose, email }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-gray-100 border-b border-gray-200 p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold text-gray-800">Email Details</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 bg-gray-50 rounded-b-lg">
          <p className="text-gray-700">
            <strong className="text-gray-900">First Name:</strong> {email.firstName}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Last Name:</strong> {email.lastName}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Email:</strong> {email.email}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Subject:</strong> {email.subject}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Message:</strong> {email.message}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Sent At:</strong>{' '}
            {new Date(email.sendAt).toLocaleString()}
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-center bg-gray-100 border-t border-gray-200 p-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMailModal;