import React from "react";

const ResearchGrants = () => {
  const grants = [
    {
      title: "Green Nudges Grants: Climate Change & Air Quality Initiatives",
      role: "Principal Investigator",
      fundingAgency: "Adamsmith International, UK",
      amount: "Rs. 2.00 million",
    },
    {
      title:
        "Hygrothermal Effect and Analysis of Advanced Composites Materials",
      role: "Principal Investigator",
      fundingAgency: "Higher Education Commission, Pakistan (NRPU)",
      amount: "Rs. 2.45 million",
      grantNo: "0011/Mech-Deptt/UETP/2023",
    },
    {
      title:
        "Microstructural analysis of the failed exhaust valves of a heavy-duty natural gas-powered I.C Engine",
      role: "Principal Investigator",
      fundingAgency:
        "Caterpillars Ltd & Mari Gas Ltd Research Project: I.C Engines",
      amount: "Rs. 1.52 million",
    },
    {
      title:
        "Development of Total Hip Joint Replacements with enhanced wear properties using UHMWPE",
      role: "Co-Principal Investigator",
      fundingAgency: "PSF - NSFC",
      amount: "Rs. 3.48 million",
      grantNo: "PSF/NSFC-II/Eng/KP-UET (02)",
    },
    {
      title:
        "Fracture Toughness Analysis of coated Ti Alloys using the Indentation Technique for Biomedical Applications",
      role: "Principal Investigator",
      fundingAgency: "HEC-Endowment fund & BOASAR, UET Peshawar",
    },
    {
      title:
        "Incorporation of Nanoclay in HDPE/CaCo3 for enhancement in mechanical and thermal properties",
      role: "Principal Investigator",
      fundingAgency: "Ahmad Saeed & Co, BOASAR, UET Peshawar",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Research Grants</h2>
      <div className="space-y-4 w-full">
        {grants.map((grant, index) => (
          <div
            key={index}
            className="p-6 gap-3 flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-gray-800">{grant.title}</p>
            <p className="text-xs font-bold text-blue-600 rounded-full">
              {grant.role}
            </p>
            <p className="text-gray-700">{grant.fundingAgency}</p>
            {grant.amount && (
              <p className="text-sm text-gray-500">Funding: {grant.amount}</p>
            )}
            {grant.grantNo && (
              <p className="text-sm text-gray-500">Grant No: {grant.grantNo}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchGrants;
