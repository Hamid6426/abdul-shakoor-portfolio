import React from "react";

const conferences = {
  international: [
    {
      title: "Sustainable Energy Technologies",
      duration: "2 Days",
      organizer: "USAID",
      date: "Sep. 12-13, 2017",
    },
    {
      title: "CPEC- Opportunities & Challenges",
      duration: "3 Days",
      organizer: "HEC",
      date: "Feb 27 - March 1, 2018",
    },
    {
      title: "CPEC Collaboration in Higher Education and Sustainable Development",
      duration: "3 Days",
      organizer: "UOP & HEC",
      date: "Feb. 19-21, 2019",
    },
    {
      title: "Paving the Ways for SDGs",
      duration: "1 Day",
      organizer: "GIZ",
      date: "Feb 27, 2019",
    },
    {
      title: "Managing SDGs with focus on Public-Private Partnership",
      duration: "1 Day Workshop",
      organizer: "GIZ",
      date: "Oct. 7, 2019",
    },
  ],
  national: [
    {
      title: "Enhancing Quality, Productivity through Kaizen Management",
      duration: "1 Day",
      organizer: "NPO",
      date: "June 27, 2006",
    },
    {
      title: "Annual Open House and Final Year Project (FYP) Exhibition",
      duration: "1 Day",
      organizer: "MED",
      date: "July 13, 2006",
    },
    {
      title: "General Public Science & Technology Model Competition",
      duration: "2 Days",
      organizer: "DOST",
      date: "June 27-28, 2008",
    },
    {
      title: "World Space Week – Exploring New Worlds in Space",
      duration: "1 Week",
      organizer: "SUPARCO",
      date: "Oct 4-10, 2017",
    },
    {
      title: "Technology Development Opportunities",
      duration: "1 Day Seminar",
      organizer: "HEC",
      date: "Oct 24, 2017",
    },
    {
      title: "National Summit on Invention to Innovation 2017",
      duration: "2 Days",
      organizer: "PSF & UETP",
      date: "Nov. 29-30, 2017",
    },
    {
      title: "Literary Festival",
      duration: "1 Week",
      organizer: "Directorate of Clubs",
      date: "Dec. 13-14, 2017",
    },
    {
      title: "Mathematical Sciences in Engineering Applications",
      duration: "2 Days",
      organizer: "HEC",
      date: "April 18-19, 2018",
    },
    {
      title: "Annual Open House and Final Year Project (FYP) Exhibition",
      duration: "1 Day",
      organizer: "KPOGCL",
      date: "July 17, 2018",
    },
    {
      title: "National Summit on Invention to Innovation 2018",
      duration: "2 Days",
      organizer: "OIC & PSF",
      date: "Nov. 16-17, 2018",
    },
    {
      title: "Anti-Corruption Week – Corruption Free Society",
      duration: "1 Week",
      organizer: "NAB",
      date: "Nov. 1-9, 2019",
    },
    {
      title: "1st Peshawar Eco-Summit",
      duration: "2 Days",
      organizer: "National Bank",
      date: "Dec. 15-16, 2019",
    },
    {
      title: "Solar Pumping Design for Irrigation & Water Supply Scheme",
      duration: "1 Day Training",
      organizer: "Eminent Engineering Pvt Ltd",
      date: "March 12, 2020",
    },
  ],
};

const Conferences = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Conferences & Workshops Attended
      </h2>

      {/* International Conferences */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          International Conferences
        </h3>
        <ul className="divide-y divide-gray-300">
          {conferences.international.map((conf, index) => (
            <li key={index} className="py-3">
              <p className="text-gray-900 font-semibold">{conf.title}</p>
              <p className="text-gray-700 text-sm">Duration: {conf.duration}</p>
              <p className="text-gray-700 text-sm">Organizer: {conf.organizer}</p>
              <p className="text-gray-500 text-sm">Date: {conf.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* National Conferences */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          National Conferences
        </h3>
        <ul className="divide-y divide-gray-300">
          {conferences.national.map((conf, index) => (
            <li key={index} className="py-3">
              <p className="text-gray-900 font-semibold">{conf.title}</p>
              <p className="text-gray-700 text-sm">Duration: {conf.duration}</p>
              <p className="text-gray-700 text-sm">Organizer: {conf.organizer}</p>
              <p className="text-gray-500 text-sm">Date: {conf.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Conferences;
