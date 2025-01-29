import AdminNavbar from '@/components/navigation/AdminNavbar';
import React from 'react';

const AdminSupportPage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="max-w-md mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Admin Support</h1>

        {/* Your intro */}
        <p className="text-lg text-gray-700 mb-4">
          Hello, I am Hamid, the admin support for this platform. If you need any assistance or have questions regarding your account or our services, feel free to reach out to me.
        </p>

        {/* Contact Information */}
        <p className="text-lg text-gray-700 mb-4">
          You can contact me via email: <a href="mailto:mianhamid6426@gmail.com" className="text-blue-500">support@example.com</a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Alternatively, you can call me at: <span className="text-blue-500">+92 314 5711 577</span>
        </p>

        {/* Additional note */}
        <p className="text-lg text-gray-700">
          I am here to help you with any technical issues, account inquiries, or general support. Don't hesitate to get in touch, and I will do my best to assist you!
        </p>
      </div>
    </>
  );
};

export default AdminSupportPage;
