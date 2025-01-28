// root/app/components/buttons/MailDeleteButton.jsx

import React from 'react';
import axios from '../../utils/axiosConfig';

const MailDeleteButton = ({ mailId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/mails/${mailId}`);
      onDeleteSuccess();
    } catch (err) {
      console.error('Failed to delete mail:', err);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default MailDeleteButton;
