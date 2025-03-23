import React, { useState } from "react";

const courses = {
  postgraduate: [
    "Applications & Selection of Materials",
    "Materials Characterizations",
    "Materials for Energy Applications",
    "Composites Materials",
    "Engineering Project Management",
    "Sustainable Engineering Design",
    "Rapid Prototyping and Rapid Tooling",
    "Quality Aspects of Engineering",
    "Technical Report Writing and Research Methodologies",
  ],
  undergraduate: [
    "Materials Engineering",
    "Engineering Metallurgy",
    "Production Automation",
    "Quality Engineering",
    "Industrial Engineering & Management",
    "Engineering Economics",
    "Health & Safety Engineering",
    "CNC Programming",
    "Workshop Practices",
  ],
};

const CoursesTaught = () => {
  const [activeTab, setActiveTab] = useState("postgraduate");

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
    }`;

  const activeCourses =
    activeTab === "postgraduate" ? courses.postgraduate : courses.undergraduate;

  return (
    <div className="max-w-5xl w-full mx-auto mb-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Courses Taught (
          {activeTab === "postgraduate" ? "Postgraduate" : "Undergraduate"})
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={() => setActiveTab("postgraduate")}
            className={tabStyle("postgraduate")}
          >
            Postgraduate
          </button>
          <button
            onClick={() => setActiveTab("undergraduate")}
            className={tabStyle("undergraduate")}
          >
            Undergraduate
          </button>
        </div>
        <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6 border border-gray-200">
          {activeCourses.map((course, index) => (
            <li key={index} className="text-gray-700 py-1">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesTaught;
