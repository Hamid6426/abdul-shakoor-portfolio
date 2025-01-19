import React from "react";
import UserLayout from "../../layouts/UserLayout";

const Homepage = () => {
  return (
    <UserLayout>
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <header className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Dr. Abdul Shakoor
            </h1>
            <p className="mt-4 text-xl">
              Distinguished Professor at the University of Engineering &
              Technology, Peshawar
            </p>
            <p className="mt-2 text-lg italic">
              "Dedicated to fostering innovation and environmental
              sustainability."
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Dr. Abdul Shakoor
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dr. Abdul Shakoor is a distinguished professor at the University
              of Engineering & Technology (UET) Peshawar. He earned his
              Bachelor&apos;s degree in Mechanical Engineering from UET Peshawar
              and completed his Master&apos;s and Ph.D. in Mechanical
              Engineering at Example University. With years of experience at UET
              Peshawar, Dr. Shakoor has been an active member of professional
              societies dedicated to environmental sustainability. His passion
              for education and research has inspired students and professionals
              alike.
            </p>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AutoCAD
                </h3>
                <p className="text-gray-700">
                  Expertise in teaching and utilizing AutoCAD for engineering
                  designs.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  HVAC Systems
                </h3>
                <p className="text-gray-700">
                  Extensive knowledge and practical experience in HVAC system
                  design and optimization.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Environmental Sustainability
                </h3>
                <p className="text-gray-700">
                  Active involvement in professional societies promoting
                  sustainable engineering practices.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Renewable Energy
                </h3>
                <p className="text-gray-700">
                  Focused on renewable energy systems, including solar, wind,
                  and energy-efficient technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Current Projects
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Dr. Shakoor is currently collaborating with PSIAC on a
              groundbreaking project. As a mentor, he leverages his expertise in
              AutoCAD and HVAC systems to educate and inspire the next
              generation of engineers. Through his guidance, students are
              equipped with the skills necessary to excel in the engineering
              field.
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gray-900 text-white mb-6">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Connect with Dr. Shakoor
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Whether you're a student, researcher, or professional, feel free
              to reach out to Dr. Abdul Shakoor for academic guidance,
              collaboration opportunities, or seminars.
            </p>
            <a
              href="mailto:your-email@gmail.com"
              className="inline-block bg-[#0ff] text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-[#0cc] hover:text-white transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </UserLayout>
  );
};

export default Homepage;
