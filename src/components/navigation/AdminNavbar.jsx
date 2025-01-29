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
    {
      name: "Sign Out",
      href: "/admin/signout",
      icon: <MdExitToApp size={24} />,
      color: "text-red-500 hover:text-red-400",
    },
  ];

  return (
    <nav className="absolute left-0 top-0 z-5 pt-4 bg-gray-100 text-black dark:text-white dark:bg-gray-950 text-black border-r border-r-2 border-gray-500 absolute h-full min-h-screen w-20 p-2">
      <ul className="space-y-6">
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
    </nav>
  );
};

export default AdminNavbar;
