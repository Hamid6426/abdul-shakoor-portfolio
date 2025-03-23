import React from "react";

const references = [
  {
    id: 1,
    name: "Zahid Ayub, Ph.D., P.E.",
    titles: ["Fellow ASME, Fellow ASHRAE", "Director Technical"],
    organization: "ISOTHERM, INC",
    location: "Arlington, Texas",
    email: "Zahid@iso-therm.com",
    website: "https://www.iso-therm.com",
  },
  {
    id: 2,
    name: "Dr. Noreen L Thomas (FIMMM, C.Eng)",
    titles: ["Visiting Fellow of Polymer Science & Technology"],
    organization: "Department of Materials, Loughborough University",
    location: "Loughborough, Leicestershire, UK",
    email: "n.l.thomas@lboro.ac.uk",
  },
  {
    id: 3,
    name: "Dr. M A Irfan (CEM – USA)",
    titles: [
      "Associate Professor, Kent State University Trumbull Campus, Ohio, USA",
      "Meritorious Professor, Director Centre of Industrial & Building Energy Audit (CIBEA) US-P",
      "CASE University of Engineering & Technology, Peshawar, Pakistan",
    ],
    email: "mairfan62@gmail.com",
  },
];

const References = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-4">References</h2>
      <ul className="flex items-start flex-col gap-6">
        {references.map((ref) => (
          <li key={ref.id} className="bg-white border-gray-200 border w-full p-4 space-y-1 shadow-lg rounded-lg">
            <strong>{ref.name}</strong>
            <ul>
              {ref.titles?.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
              {ref.organization && <li>{ref.organization}</li>}
              {ref.location && <li>{ref.location}</li>}
              <li>Email: <a href={`mailto:${ref.email}`}>{ref.email}</a></li>
              {ref.website && (
                <li>
                  Website:{" "}
                  <a href={ref.website} target="_blank" rel="noopener noreferrer">
                    {ref.website}
                  </a>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
