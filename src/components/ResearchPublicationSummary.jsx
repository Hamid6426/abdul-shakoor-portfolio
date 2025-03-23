import React from "react";

const researchSummary = [
  { label: "H-Index", value: "13" },
  { label: "I-10 Index", value: "13" },
  { label: "Total ISI-Indexed Publications", value: "29" },
  { label: "Book Chapter", value: "In Process" },
  { label: "Google Scholar Citations", value: "1099" },
  { label: "SCOPUS Citations", value: "1123" },
];

const ResearchPublicationSummary = () => {
  return (
    <div className="max-w-5xl w-full mx-auto pb-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Research Publication Summary
      </h2>
      <div className="bg-white shadow-md w-full rounded-lg px-6 py-3 border border-gray-200">
        <ul className="divide-y divide-gray-300 w-full">
          {researchSummary.map((item, index) => (
            <li key={index} className="py-3 w-full flex justify-between">
              <span className="text-gray-700 font-semibold">{item.label}:</span>
              <span className="text-gray-900">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResearchPublicationSummary;
