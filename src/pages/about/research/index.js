import ResearchGrants from "@/components/ResearchGrants";
import ResearchInterests from "@/components/ResearchInterests";
import ResearchSupervisionActivities from "@/components/ResearchSupervisionActivities";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <ResearchInterests />
      <ResearchGrants />
      <ResearchSupervisionActivities />
    </div>
  );
}
