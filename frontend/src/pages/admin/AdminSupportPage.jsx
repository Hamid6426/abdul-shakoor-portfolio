import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const AdminSupportPage = () => {
  return (
    <AdminLayout>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Support</h1>
        <p className="text-lg text-gray-700">
          If you need any assistance, please contact our support team at support@example.com or call +123-456-7890.
        </p>
      </div>
    </AdminLayout>
  );
};

export default AdminSupportPage;
