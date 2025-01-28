import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Intro from "@/components/aboutPage/Intro";
import Education from "@/components/aboutPage/Education";
import Experience from "@/components/aboutPage/Experience";
import CTA from "@/components/aboutPage/CTA";
import CurrentProjects from "@/components/aboutPage/CurrentProjects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col justify-start items-center">
        <section className="flex flex-col justify-center items-center gap-4 bg-white max-w-4xl">
          <Intro />
          <Experience />
          <Education />
          <CurrentProjects />
          <cta />
        </section>
      </main>
    </>
  );
}
