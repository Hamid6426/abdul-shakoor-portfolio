import React from "react";
import {
  MdDashboard,
  MdArticle,
  MdEmail,
  MdSettings,
  MdSupport,
  MdExitToApp,
} from "react-icons/md";

const AdminNavbar = () => {
  // Array of navigation items
  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: <MdDashboard size={24} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Manage Blogs",
      href: "/admin/manage-blogs",
      icon: <MdArticle size={24} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Manage Mails",
      href: "/admin/manage-mails",
      icon: <MdEmail size={24} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <MdSettings size={24} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Support",
      href: "/admin/support",
      icon: <MdSupport size={24} />,
      color: "hover:text-blue-400",
    },
  ];

  // Function to handle token removal
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    window.location.href = '/admin/login'; // Redirect to login page (or any other page)
  };

  return (
    <nav className="flex justify-between w-full bg-gray-100 dark:text-white dark:bg-gray-950 text-black border-b-2 border-gray-500">
      <div className="flex justify-between items-center  w-full max-w-7xl pl-4 pr-3 py-4 mx-auto">
        <ul className="flex w-full gap-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`w-full flex flex-col items-center justify-center gap-y-1 text-lg ${item.color}`}
              >
                <div className="">{item.icon}</div>
                <div className="text-xs text-center">{item.name}</div>
              </a>
            </li>
          ))}
        </ul>
        <button 
          className="text-red-500 hover:text-gray-500" 
          onClick={handleLogout} // Attach the handler
        >
          <MdExitToApp size={24} />
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
