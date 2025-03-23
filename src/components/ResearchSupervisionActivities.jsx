import React from "react";

const ResearchSupervisionActivities = () => {
  const supervisionData = [
    {
      category: "Ph.D. Students",
      details: [
        "Produced one PhD as Home Supervisor at Imperial College London under the Schlumberger Scholarship 'Faculty for the Future Program'.",
        "Currently supervising 3 PhD students.",
      ],
    },
    {
      category: "Master’s Students",
      details: [
        "Produced 10 Master’s students in the last 7 years.",
        "Currently supervising 6 Master’s students.",
        "Conducted more than 20 examinations of MS students.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Research Supervision Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {supervisionData.map((section, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {section.category}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {section.details.map((detail, i) => (
                <li key={i} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchSupervisionActivities;
