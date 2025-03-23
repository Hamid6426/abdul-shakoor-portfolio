import React from "react";

const Awards = () => {
  const awards = [
    {
      title: "National Engineering Excellence Award",
      organization: "IEP, Pakistan",
      year: "March 2024",
    },
    {
      title: "Associate Fellow (AFHEA) - Higher Education Academy",
      organization: "British Council & HEC (Advance HE UK)",
      year: "2022",
    },
    {
      title: "Fellow Institute of Engineers Pakistan (FIEP)",
      organization: "",
      year: "2023",
    },
    {
      title: "Fellow Pakistan Academy of Engineering (FPAE)",
      organization: "",
      year: "2022",
    },
    {
      title: "Administered 113 National & International R&D Projects",
      organization: "UET Peshawar",
      year: "Total: 965.5 million PKR",
    },
    {
      title: "Established 11 International & 18 National Research links",
      organization: "MOUs and Partnerships for UET Peshawar",
      year: "2017-2020",
    },
    {
      title: "Developed the 1st ORIC & Spin-off Company Policy",
      organization: "UET Peshawar",
      year: "2020",
    },
    {
      title: "Pioneered in Awarding the First UET Commercial Licensing",
      organization: "UET Technology to Industry",
      year: "2020",
    },
    {
      title:
        "Sponsorships to Visit Chinese Universities for Research Collaborations",
      organization: "HEC & PSF",
      year: "2019",
    },
    {
      title: "Post-Doc Fellowship",
      organization:
        "Malinda & Gates Foundation, Loughborough University, UK",
      year: "2013",
    },
    {
      title: "University Teacher Award",
      organization: "Loughborough University, UK",
      year: "2009-2013",
    },
    {
      title: "Foreign Scholarship Award for MS leading Ph.D.",
      organization:
        "UET Peshawar & HEC Pakistan (Loughborough University, UK)",
      year: "2009-2013",
    },
    {
      title: "Graduate School Assistantship",
      organization: "SACME – Loughborough University, UK",
      year: "2010-2013",
    },
    {
      title: "Research Assistantship Award",
      organization:
        "Impact Research Lab, Department of Mechanical Engineering, UET Peshawar",
      year: "March 2002 - Oct 2002",
    },
    {
      title: "Merit Scholarship",
      organization:
        "B.I.S.E Swat for Higher Secondary School Certificate (Islamia College Peshawar)",
      year: "1995-1997",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Awards & Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
          >
            <p className="text-lg font-semibold text-gray-800">
              {award.title}
            </p>
            {award.organization && (
              <p className="mt-2 text-gray-700">{award.organization}</p>
            )}
            <p className="mt-2 text-sm text-gray-500">{award.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
