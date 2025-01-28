import Intro from "@/app/components/about/Intro";
import Education from "../../components/about/Education";
import Experience from "../../components/about/Experience";

const AboutPage = () => {
  return (
    <>
      <div>
        <Intro />
        <Experience />
        <Education />
      </div>
    </>
  );
};

export default AboutPage;
