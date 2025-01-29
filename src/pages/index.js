export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-gray-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Dr. Abdul Shakoor</h1>
        <p className="text-xl mt-2">Professor at UET Peshawar</p>
        <blockquote className="italic text-gray-300 mt-4">
          "Dedicated to fostering innovation and environmental sustainability."
        </blockquote>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="text-center">
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Dr. Abdul Shakoor is a distinguished professor at the University of
            Engineering & Technology (UET) Peshawar. With a Ph.D. in Mechanical
            Engineering and years of experience, he is dedicated to education,
            research, and environmental sustainability.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-gray-200">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professor at UET Peshawar",
                description:
                  "Over 10 years of teaching and mentoring students in Mechanical Engineering.",
              },
              {
                title: "Lead Researcher at XYZ Lab",
                description:
                  "Led research in sustainable energy, publishing in top journals.",
              },
              {
                title: "Consultant for ABC Company",
                description:
                  "Provided expert consultation in HVAC and CAD system optimization.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {exp.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mt-12 bg-gray-100 dark:bg-gray-900 py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6 dark:text-gray-200">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AutoCAD",
                description: "Expert in CAD modeling for engineering designs.",
              },
              {
                title: "HVAC Systems",
                description:
                  "Extensive knowledge in system design and optimization.",
              },
              {
                title: "Environmental Sustainability",
                description:
                  "Promoting sustainable engineering practices.",
              },
              {
                title: "Renewable Energy",
                description: "Focused on solar, wind, and green energy solutions.",
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {expertise.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {expertise.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-gray-200">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ph.D. in Mechanical Engineering",
                description:
                  "Specialized in renewable energy and thermal systems.",
              },
              {
                title: "M.S. in Mechanical Engineering",
                description: "Focused on CAD modeling and HVAC systems.",
              },
              {
                title: "B.S. in Mechanical Engineering",
                description:
                  "Graduated from UET Peshawar with a strong foundation in engineering.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {edu.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-gray-200">
            Current Projects
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center dark:text-gray-300">
            Dr. Shakoor is collaborating with PSIAC on a groundbreaking project
            in HVAC and AutoCAD. His mentorship is shaping the next generation
            of engineers in sustainable technologies.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 dark:bg-gray-900  mt-12 bg-gray-100 text-white py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-black dark:text-white">Connect with Dr. Shakoor</h2>
          <p className="text-lg mt-4 leading-relaxed text-black dark:text-white">
            Interested in research, collaboration, or academic guidance? Get in
            touch with Dr. Abdul Shakoor.
          </p>
          <a
            href="mailto:your-email@gmail.com"
            className="inline-block mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}
