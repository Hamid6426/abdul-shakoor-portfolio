import React from "react";

export default function Expertise() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">AutoCAD</h3>
            <p className="text-gray-700">
              Expertise in teaching and utilizing AutoCAD for engineering
              designs.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              HVAC Systems
            </h3>
            <p className="text-gray-700">
              Extensive knowledge and practical experience in HVAC system design
              and optimization.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Environmental Sustainability
            </h3>
            <p className="text-gray-700">
              Active involvement in professional societies promoting sustainable
              engineering practices.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Renewable Energy
            </h3>
            <p className="text-gray-700">
              Focused on renewable energy systems, including solar, wind, and
              energy-efficient technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
