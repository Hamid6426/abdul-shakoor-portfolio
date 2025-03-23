import React from "react";

const professionalAssociations = [
  { title: "Life Time Professional Member", organization: "Pakistan Engineering Council (PEC), Pakistan", duration: "2002 – Present" },
  { title: "Life Time Member", organization: "Institute of Engineers Pakistan (IEP), Pakistan", duration: "2014 – Present" },
  { title: "Life Time Member", organization: "Pakistan Engineers Foundation (PEF), Pakistan", duration: "2018 – Present" },
  { title: "Member", organization: "American Society of Mechanical Engineers (ASME), USA", duration: "Present" },
  { title: "Member", organization: "Society of Plastic Engineers (SPE), UK", duration: "2013 – Present" },
  { title: "Member", organization: "Asian Council of Science Editor (ACSE)", duration: "2021 – Present" },
  { title: "Member", organization: "Affiliation Committee, UET, Peshawar", duration: "2022 – Present" },
  { title: "Member", organization: "PEC OBE/OBA Accreditation and Program Evaluation Team", duration: "2015 – Present" },
  { title: "Member", organization: "Board of Studies for various Engineering Universities in Pakistan", duration: "2016 – Present" },
  { title: "Member", organization: "Board of Faculty FMIC, UET Peshawar", duration: "2018 – Present" },
  { title: "Member", organization: "Academic Council, UET Peshawar", duration: "2018 – Present" },
  { title: "Member", organization: "Postgraduate Studies Steering Committee, UET, Peshawar", duration: "2015 – Present" },
  { title: "Elected Member", organization: "University Syndicate", duration: "2020–2021, 2015–2016, 2014–2015" },
  { title: "Elected President", organization: "Engineering University Teacher Welfare Association (EUTWA)", duration: "2015–2016" },
  { title: "Elected President", organization: "British Alumni Association of Pakistan (BAAP) - KP Chapter", duration: "2015–2016" },
  { title: "Elected Provincial President", organization: "FAPUASA – KP Chapter", duration: "2016–2017" },
  { title: "Focal Person", organization: "Career & Industrial Liaison Office (MED), UET Peshawar", duration: "2015 – Present" },
  { title: "Member", organization: "University Statutes Committee – UET Peshawar", duration: "2015–2016" },
  { title: "Member", organization: "University Tax Committee – UET Peshawar", duration: "2018 – Present" },
];

const ProfessionalAssociations = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Professional Associations & Memberships
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <ul className="divide-y divide-gray-300">
          {professionalAssociations.map((association, index) => (
            <li key={index} className="py-3">
              <p className="text-gray-900 font-semibold">{association.title}</p>
              <p className="text-gray-700">{association.organization}</p>
              <p className="text-gray-500 text-sm">{association.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalAssociations;
