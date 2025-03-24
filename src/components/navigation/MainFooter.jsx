import React from "react";

const MainFooter = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact Me",
      links: [
        { name: "Gmail", href: "mailto:shakoor@uetpeshawar.edu.pk" },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/dr-abdul-shakoor-66309651/",
        },
        { name: "ORCID", href: "https://orcid.org/0000-0003-2101-077X" },
        {
          name: "ResearchGate",
          href: "http://researchgate.net/profile/Dr-Abdul-Shakoor",
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/share/1B4N5cAd2o/?mibextid=wwXIfr",
        },
      ],
    },
  ];

  return (
    <footer className="px-8 md:px-12 lg:px-16 xl:px-24 py-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {footerSections.map((section, index) => (
        <section key={index}>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            {section.title}
          </h2>
          <nav className="flex flex-col space-y-2">
            {section.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </section>
      ))}

      {/* Spanning 2 columns on large screens */}
      <section className="lg:col-span-2 flex flex-col items-start">
        <h2 className="text-lg font-semibold text-blue-600 mb-4">
          Dr. Abdul Shakoor
        </h2>
        <p className="mb-4">
          An expert in HVAC and Material Science, striving for a better
          environment and education.
        </p>
        <address className="not-italic">
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Phone:</span>{" "}
            +92-1234-56789
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Address:</span> Room
            #2, Near Power Plant Lab, Mechanical Engineering Department, UET
            Peshawar
          </p>
        </address>
      </section>
    </footer>
  );
};

export default MainFooter;
