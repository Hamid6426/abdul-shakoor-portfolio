import React from "react";

const CurrentTitles = () => {
  const positions = [
    {
      title: "Professor, Department of Mechanical Engineering",
      organization: "UET, Peshawar, Pakistan",
      duration: "2018 – Present",
    },
    {
      title: "Advisor Climate Change and Air Quality Initiatives",
      organization: "Adam Smith Int. UK",
      duration: "Oct 2023 – Present",
    },
    {
      title: "Advisor, Graduate Studies, Materials Engineering Program",
      organization: "UET, Peshawar, Pakistan",
      duration: "2017 – Present",
    },
    {
      title:
        "OBE/OBA Program Evaluator, Mechanical & Materials Engineering Programs",
      organization:
        "Pakistan Engineering Council (PEC) and National Technology Council (NTC), Pakistan",
      duration: "2015 – Present",
    },
  ];

  return (
    <div className="max-w-5xl w-full mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        Current Positions
      </h2>
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-md"
          >
            <div className="flex flex-col justify-start gap-2 items-start">
              <p className="font-semibold">{position.title}</p>
              <p className="text-sm">{position.duration}</p>
              <p className="">{position.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTitles;
