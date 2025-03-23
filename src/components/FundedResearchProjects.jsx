import React from "react";

const projects = [
  {
    title: "Ph.D. Thesis",
    description:
      "Fracture Toughness Analysis of coated Ti Alloys using the Indentation Technique for Biomedical Applications",
    funding: "HEC-Endowment fund",
  },
  {
    title: "Development of Polymeric Nanocomposites",
    description:
      "Development of Polymeric Nanocomposites and their masterbatches for sewerage application",
    funding: "Royal PVC Ltd.",
  },
  {
    title: "Master’s Thesis",
    description:
      "Development of Anti-coil coating for PV Modules of Quaid-E-Azam Solar Park to increase their efficiency",
    funding: "PAEDB/USAID",
  },
  {
    title: "Development of Total Hip Joint Replacements",
    description:
      "Development of Total Hip Joint Replacements with enhanced wear properties using UHMWPE",
    funding: "PSF & NSFC",
  },
  {
    title: "Distortion analysis of thin metal plate during welding using FEA",
    funding: "BOASAR, UET Peshawar",
  },
  {
    title: "Development of lightweight Polymeric Composites",
    description: "For high-impact applications",
    funding: "Escorts International LLP",
  },
  {
    title: "Fracture Toughness Analysis of coated Ti-6246",
    description: "Using nano-indentation Technique",
    funding: "BOASAR, UET Peshawar",
  },
  {
    title: "Microstructural analysis of the failed exhaust valves",
    description:
      "Of a heavy-duty natural gas-powered I.C engine",
    funding: "Caterpillars I.C Engines",
  },
  {
    title: "Modal Analysis of FHT for sand-contaminated water",
    description: "And Design modification",
    funding: "PESCO",
  },
  {
    title: "Failure analysis of crude oil storage tank bottom plate",
    description: "And remedial actions for its life enhancement",
    funding: "OGDCL",
  },
  {
    title: "Incorporation of Nanoclay in HDPE/CaCo3",
    description: "For enhancement in mechanical and thermal properties",
    funding: "Ahmad Saeed & Co.",
  },
  {
    title: "Comparative Analysis and Characterization of Open Cell Aluminum Foam",
    description: "With Different Pores Size per Inch (PPI) Under Mechanical Loading",
    funding: "BOASAR, UET Peshawar",
  },
  {
    title: "Development of Glass/Carbon Fiber Reinforced Polymeric Composites",
    funding: "MARKS Pvt Ltd",
  },
];

const FundedResearchProjects = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Funded Research Projects & Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {project.title}
            </h3>
            {project.description && (
              <p className="mt-2 text-sm text-gray-700">
                {project.description}
              </p>
            )}
            <span className="mt-4 block text-xs text-gray-500">
              <strong>Funding:</strong> {project.funding}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundedResearchProjects;
