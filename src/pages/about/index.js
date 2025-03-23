import Awards from "@/components/Awards";
import FundedResearchProjects from "@/components/FundedResearchProjects";
import InternationalTraining from "@/components/InternationalTraining";
import StudentSupervision from "@/components/StudentSupervision";
import React from "react";

export default function index() {
  return (
    <div>
      <Awards />
      <InternationalTraining />
      <FundedResearchProjects />
      <StudentSupervision />
    </div>
  );
}
