import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
    <main className="w-full min-h-screen flex flex-col justify-start items-center"> 
      <section className="flex flex-col justify-center items-center gap-4 bg-white max-w-4xl">
        <h2 className="text-3xl font-bold">Current Projects</h2>
        <p className="text-lg leading-relaxed text-center">
          Dr. Shakoor is currently collaborating with PSIAC on a groundbreaking
          project. As a mentor, he leverages his expertise in AutoCAD and HVAC
          systems to educate and inspire the next generation of engineers.
          Through his guidance, students are equipped with the skills necessary
          to excel in the engineering field.
        </p>
      </section>
    </main>
  );
}
