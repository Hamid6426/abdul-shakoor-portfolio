import React from "react";

const PastTitles = () => {
  const pastPositions = [
    {
      title:
        "Director, Office of Research, Innovation & Commercialization (ORIC)",
      organization: "UET, Peshawar, Pakistan",
      duration: "2017 - 2021",
    },
    {
      title:
        "Local Project Manager – Youth Entrepreneurs in Business Planning & Management",
      organization: "USAID- ERDA- TiE",
      duration: "2024",
    },
    {
      title: "Advisor Foreign Students Affairs",
      organization: "UET, Peshawar, Pakistan",
      duration: "2018 - 2024",
    },
    {
      title: "Associate Professor, Department of Mechanical Engineering",
      organization: "UET, Peshawar, Pakistan",
      duration: "2016 – 2018",
    },
    {
      title: "Research Associate, Materials Engineering",
      organization: "Loughborough University, UK",
      duration: "Jun 2013 – Dec 2013",
    },
    {
      title: "Assistant Professor, Department of Mechanical Engineering",
      organization: "UET, Peshawar, Pakistan",
      duration: "2007 – 2016",
    },
    {
      title: "Lecturer, Department of Mechanical Engineering",
      organization: "UET, Peshawar, Pakistan",
      duration: "2003 – 2008",
    },
    {
      title: "University Teacher / Lab Demonstrator, Materials Engineering",
      organization: "Loughborough University, UK",
      duration: "2009 - 2013",
    },
    {
      title: "Post-Graduate Advisor, Dynamics & Control Program",
      organization: "UET, Peshawar, Pakistan",
      duration: "2014 – 2017",
    },
  ];

  return (
    <div className="max-w-5xl w-full mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Past Positions</h2>
      <div className="space-y-4">
        {pastPositions.map((position, index) => (
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

export default PastTitles;
