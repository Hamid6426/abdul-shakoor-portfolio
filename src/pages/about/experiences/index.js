import CoursesTaught from "@/components/CoursesTaught";
import CurrentTitles from "@/components/CurrentTitles";
import PastTitles from "@/components/PastTitles";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <CurrentTitles />
      <PastTitles />
      <CoursesTaught />
    </div>
  );
}
