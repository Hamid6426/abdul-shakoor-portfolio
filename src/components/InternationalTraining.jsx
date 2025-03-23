import React from "react";

const trainings = [
  {
    title: "Assertiveness & Confidence Building",
    year: "2004",
    organization: "Leeds Met Training, Leeds, UK",
  },
  {
    title: "Enhancing Quality, Productivity through Kaizen Management",
    year: "2006",
    organization: "NPO, Islamabad",
  },
  {
    title: "Energy, Health, Environment and Management of Industrial Operations",
    year: "2008",
    organization: "HEC Pakistan",
  },
  {
    title: "Design it, Build it, Pitch it, Win it",
    year: "2009",
    organization: "CETL, Loughborough University, UK",
  },
  {
    title: "Green and Bio Future",
    year: "2010",
    organization: "NNFCC, LincolnIn, York, UK",
  },
  {
    title: "Graduate Summer School",
    year: "2011",
    organization: "Vitae & Loughborough University, UK",
  },
  {
    title: "Supporting Engineering Students",
    year: "2011",
    organization: "Higher Education Academy, UK",
  },
  {
    title: "Green Skills, Learning & Leading on Sustainability",
    year: "2011",
    organization: "SRC, Loughborough University, UK",
  },
  {
    title: "New Lecturers Training",
    year: "2012",
    organization: "Higher Education Academy, UK",
  },
  {
    title: "Project Management in the Real World",
    year: "2012",
    organization: "Fistral Consultancy, UK",
  },
  {
    title: "Successful Teaching and Assessment for Researchers (STARs)",
    year: "2012",
    organization: "Loughborough University, UK",
  },
  {
    title: "Strategic Proposal Development",
    year: "2018",
    organization: "ASU & USAID, Islamabad",
  },
  {
    title: "Strengthen Industry-University Collaborations",
    year: "2018",
    organization: "IFM, Cambridge University, UK",
  },
  {
    title: "Leadership In Higher Education",
    year: "2019",
    organization: "ASU & USAID, USA",
  },
  {
    title: "Successful Research Grant Applications – Getting it Right",
    year: "2020",
    organization: "Elsevier Research Academy",
  },
  {
    title: "Promoting Research Excellence in Academics across Pakistan",
    year: "2022",
    organization: "Elsevier Researcher Academy, HEC Pakistan",
  },
  {
    title: "Managing Science & Technology Parks (STPs)",
    year: "2022",
    organization: "COMSTECH, MS&T Pakistan",
  },
  {
    title: "Science Communication and Community Engagement",
    year: "2023",
    organization: "COMSTECH, MoFA, Pakistan",
  },
];

const InternationalTraining = () => {
  return (
    <div className="max-w-5xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        International Training Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {training.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              {training.organization}
            </p>
            <span className="mt-4 block text-xs text-gray-500">
              {training.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalTraining;
