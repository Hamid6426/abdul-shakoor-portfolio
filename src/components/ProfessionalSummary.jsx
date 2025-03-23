  import React from "react";

  const ProfessionalSummary = () => {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white border border-gray-200 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
          Professional Summary
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Professor in the Department of Mechanical Engineering at{" "}
          <strong>
            University of Engineering & Technology (UET) Peshawar, Pakistan
          </strong>{" "}
          with over <strong>20 years of experience</strong> in teaching, research,
          and supervision. Specialized in{" "}
          <strong>
            Materials, Polymeric Composites, Material Characterization, Sustainable
            Development, Policy Management, and Climate Change
          </strong>
          .
        </p>
        <p className="mt-6 text-lg text-gray-800">
          Extensive experience in organizing{" "}
          <strong>
            national and international conferences, seminars, and workshops
          </strong>{" "}
          on Energy Policy, Innovation Management, SDGs, and University–Industry
          Linkages.
        </p>
        <p className="mt-6 text-lg text-gray-800">
          Authored <strong>50+ peer-reviewed articles</strong> in leading journals,
          cited over <strong>100 times</strong>. Holds an <strong>H-index of 11</strong>{" "}
          and an <strong>i10-index of 12</strong>, demonstrating the scientific impact
          of research.
        </p>
        <p className="mt-6 text-lg text-gray-800">
          Recognized for contributions to teaching and research with{" "}
          <strong>competitive national and international scholarships</strong> for
          advanced studies in Mechanical and Materials Engineering.
        </p>
      </div>
    );
  };

  export default ProfessionalSummary;
