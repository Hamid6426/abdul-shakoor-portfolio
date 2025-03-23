import React from "react";

const editorialActivities = [
  {
    title: "Reviewer Polymer Composites",
    impactFactor: "2.324",
    issn: "1548-0569",
  },
  {
    title: "Reviewer Polymer Engineering & Science",
    impactFactor: "1.449",
    issn: "1548-2634",
  },
  {
    title: "Reviewer Energy Policy",
    impactFactor: "4.599",
    issn: "0301-4215",
  },
  {
    title: "Reviewer Journal of Engineering and Applied Sciences",
    category: "HEC 'X' Category",
    issn: "1023-862X",
  },
  {
    title: "Reviewer Technical Journal of UET, Taxila",
    category: "HEC 'Y' Category",
  },
];

const EditorialActivities = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Editorial & Reviewer Activities
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <ul className="divide-y divide-gray-300">
          {editorialActivities.map((activity, index) => (
            <li key={index} className="py-3">
              <p className="text-gray-900 font-semibold">{activity.title}</p>
              {activity.impactFactor && (
                <p className="text-gray-700 text-sm">Impact Factor: {activity.impactFactor}</p>
              )}
              {activity.category && (
                <p className="text-gray-700 text-sm">Category: {activity.category}</p>
              )}
              {activity.issn && (
                <p className="text-gray-700 text-sm">ISSN: {activity.issn}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditorialActivities;
