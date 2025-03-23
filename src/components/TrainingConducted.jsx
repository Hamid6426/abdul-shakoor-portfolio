import React from "react";

const trainings = [
  {
    title: "University Statutes, Rules & Regulations",
    duration: "5 Days",
    audience: "Administrative officers",
    location: "CEEC, UET Peshawar, Pakistan",
  },
  {
    title: "Energy in the Built Environment",
    duration: "2 Days",
    audience: "Engineers, Architects & Design Consultants",
  },
  {
    title: "Open Foam for Engineers",
    duration: "1 Day",
    location: "CEEC, UET Peshawar, Pakistan",
  },
  {
    title: "PVC Characterizations",
    duration: "5 Days",
    audience: "Industry Professionals",
    location: "Loughborough University, UK",
  },
  {
    title: "Polymers Characterizations",
    duration: "5 Days",
    audience: "Postgraduate Students",
    location: "MED, UET Peshawar, Pakistan",
  },
  {
    title: "Professional Development",
    duration: "1 Day",
    audience: "Graduating Students",
    location: "MED, UET Peshawar, Pakistan",
  },
  {
    title: "CES EduPack",
    duration: "2 Days",
    audience: "MSc Students",
    location: "US-P CASE, UET Peshawar, Pakistan",
  },
];

const TrainingConducted = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Training Sessions Conducted
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <ul className="divide-y divide-gray-300">
          {trainings.map((training, index) => (
            <li key={index} className="py-3">
              <p className="text-gray-900 font-semibold">{training.title}</p>
              <p className="text-gray-700 text-sm">Duration: {training.duration}</p>
              {training.audience && (
                <p className="text-gray-700 text-sm">Audience: {training.audience}</p>
              )}
              {training.location && (
                <p className="text-gray-700 text-sm">Location: {training.location}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainingConducted;
