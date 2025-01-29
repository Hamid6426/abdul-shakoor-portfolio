import React from 'react';

const MainFooter = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Contact Me',
      links: [
        { name: 'Gmail', href: 'mailto:your-email@gmail.com' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com' },
        { name: 'WhatsApp', href: 'https://wa.me/123456789' },
        { name: 'Phone', href: 'tel:+92123456789' },
      ],
    },
    {
      title: 'For Everyone',
      links: [
        { name: 'Advanced HVAC', href: '/hvac' },
        { name: 'Advanced CAD', href: '/cad' },
        { name: 'Higher Education & Stress', href: '/education' },
        { name: 'Time Management', href: '/time-management' },
      ],
    },
  ];

  const expertInfo = {
    title: 'Dr. Abdul Shakoor',
    description: 'An expert in HVAC and Material Science, striving for a better environment and education.',
    contact: [
      { label: 'Phone', value: '+92-1234-56789' },
      { label: 'Address', value: 'Room #2, Near Power Plant Lab, Mechanical Engineering Department, UET Peshawar' },
    ],
  };

  return (
    <footer className="bg-gray-100 text-black dark:text-white dark:bg-gray-950 text-white py-12 border-t border-t-2 border-gray-500">
      {/* Grid Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-black dark:text-white">
        {/* Dynamically Render Sections */}
        {footerSections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl text-blue-600 font-bold mb-6">{section.title}</h2>
            <nav className="flex flex-col gap-4">
              {section.links.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-gray-500">
                  {link.name}
                </a>
              ))}
            </nav>
          </section>
        ))}

        {/* Expert Information */}
        <section>
          <h2 className="text-xl text-blue-600 font-bold mb-6">{expertInfo.title}</h2>
          <p className="mb-4">{expertInfo.description}</p>
          <address className="not-italic">
            {expertInfo.contact.map((item, idx) => (
              <p key={idx} className="mb-2">
                <span className="text-blue-600 font-bold">{item.label}:</span> {item.value}
              </p>
            ))}
          </address>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <a href="/admin/dashboard">Abdul Shakoor</a>. All rights reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
