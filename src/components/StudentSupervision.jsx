import React, { useState } from "react";

const studentSupervision = {
  phd: [
    {
      title: "Fracture Toughness Analysis of coated Ti Alloys",
      description:
        "Using the Indentation Technique for Biomedical Applications",
    },
    {
      title: "Development of Polymeric Nanocomposites",
      description: "And their masterbatches for construction application",
    },
    {
      title: "Development of PCM-based composite materials",
      description: "For energy storage systems",
    },
  ],
  masters: [
    {
      title: "Hybrid PLA Composites using Flax/NBR",
      description: "Development and characterization",
    },
    {
      title: "ZnS filled Epoxy-based composites",
      description: "Development and characterization",
    },
    {
      title: "Anti-coil coating for PV Modules",
      description:
        "For Quaid-E–Azam Solar Park to increase efficiency",
    },
    {
      title: "PLA-wood-based composites",
      description: "For improved performance",
    },
    {
      title: "Total Hip Joint Replacements",
      description: "Enhanced wear properties using UHMWPE",
    },
    {
      title: "Nanoclay in HDPE/CaCo3",
      description:
        "For mechanical & thermal property enhancement",
    },
    {
      title: "Open Cell Aluminum Foam Analysis",
      description:
        "Characterization with different Pores Size per Inch (PPI) under mechanical loading",
    },
    {
      title: "Glass/Carbon Fiber Reinforced Polymeric Composites",
    },
    {
      title: "Distortion Analysis of Thin Metal Plates",
      description: "During welding using FEA",
    },
    {
      title: "Lightweight Polymeric Composites",
      description: "For high-impact applications",
    },
    {
      title: "Fracture Toughness Analysis of coated Ti-6246",
      description: "Using nano-indentation technique",
    },
    {
      title: "Microstructural analysis of failed exhaust valves",
      description:
        "Of a heavy-duty natural gas-powered I.C engine",
    },
    {
      title: "Modal Analysis of FHT",
      description:
        "For sand-contaminated water and design modification",
    },
    {
      title: "Failure analysis of crude oil storage tank bottom plate",
      description:
        "And remedial actions for life enhancement",
    },
    {
      title: "Economic Recycling & Extraction of Silicon",
      description: "For PV modules",
    },
  ],
};

const StudentSupervision = () => {
  const [activeTab, setActiveTab] = useState("phd");

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-800"
    }`;

  const activeSupervisions =
    activeTab === "phd" ? studentSupervision.phd : studentSupervision.masters;

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Master & PhD Student Supervision
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button onClick={() => setActiveTab("phd")} className={tabStyle("phd")}>
          Ph.D. Thesis
        </button>
        <button onClick={() => setActiveTab("masters")} className={tabStyle("masters")}>
          Master’s Thesis
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeSupervisions.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h4>
            {project.description && (
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSupervision;
