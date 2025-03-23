import React from "react";

const EducationalQualification = () => {
  const qualifications = [
    {
      degree: "Post-Doc, Malinda & Gates Foundation (Polymeric Coating)",
      institution: "Loughborough University, UK",
      year: "2013",
    },
    {
      degree: "PhD (Materials/Manufacturing Engineering)",
      institution: "Loughborough University, UK",
      year: "2013",
    },
    {
      degree: "MSc (Advanced Manufacturing Engineering & Management)",
      institution: "Loughborough University, UK",
      year: "2009",
    },
    {
      degree: "MSc (Engineering Control Systems & Instrumentation)",
      institution: "University of Huddersfield, UK",
      year: "2006",
    },
    {
      degree: "Short Course in (Materials In Oral Health)",
      institution: "University of Hong Kong [Online]",
      year: "2020",
    },
    {
      degree: "PG-Certificate in (Project Management)",
      institution: "Leeds Metropolitan University, UK",
      year: "2005",
    },
    {
      degree: "PG-Certificate in (Personal & Professional Development)",
      institution: "Leeds Metropolitan University, UK",
      year: "2005",
    },
    {
      degree: "B.Sc. (Mechanical Engineering)",
      institution: "University of Engineering & Technology Peshawar, Pakistan",
      year: "2002",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Educational Qualifications</h2>
      <ul className="list-disc pl-5 space-y-3">
        {qualifications.map((qualification, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-semibold">{qualification.degree}</span>, {qualification.institution}
            <span className="block text-sm text-gray-500">{qualification.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalQualification;
