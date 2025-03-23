import React from "react";

const ResearchInterests = () => {
  const researchAreas = [
    "Climate Change, Education and Adaptation",
    "Polymer & Biopolymers Composites",
    "Biomaterials for Biomedical Applications",
    "Rapid Prototyping & Its Materials",
    "Energy Materials & Systems",
    "Sustainable Engineering",
    "PV Modules and Reliability",
    "PV Modules Recycling",
    "Sustainable Development",
    "Education Policy and Planning",
    "Tech. Transfer Strategy & Administration",
    "System Designing",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Research Interests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchInterests;
