import React from "react";

const expertiseAreas = [
  {
    title: "Materials Engineering",
    description:
      "Expertise in material selection, characterization, and innovative applications in energy, biomedical, and industrial sectors.",
  },
  {
    title: "Polymer Nanocomposites",
    description:
      "Development of advanced polymeric nanocomposites and masterbatches for diverse construction and industrial applications.",
  },
  {
    title: "Composite Materials",
    description:
      "Innovative research in glass/carbon fiber reinforced composites and sustainable composite material systems.",
  },
  {
    title: "Engineering Project Management",
    description:
      "Proven track record of leading national and international R&D projects with multi-million PKR budgets.",
  },
  {
    title: "Sustainable Engineering",
    description:
      "Focus on sustainable energy technologies, green initiatives, and environmentally responsible engineering solutions.",
  },
  {
    title: "Higher Education & Training",
    description:
      "Extensive experience in teaching, supervising students, and conducting professional training at both undergraduate and postgraduate levels.",
  },
  {
    title: "Research & Editorial",
    description:
      "Prolific researcher with a strong publication record, active in peer-review, and engaged in academic leadership and editorial activities.",
  },
  {
    title: "Professional Leadership",
    description:
      "Active involvement in professional associations, committees, and leadership roles that drive academic and industry collaborations.",
  },
];

const AreaOfExpertise = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Areas of Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {expertiseAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {area.title}
            </h3>
            <p className="text-gray-700 text-sm">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfExpertise;
