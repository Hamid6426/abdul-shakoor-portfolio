const Projects = () => {
  
  const projects = [
    {
      title: "Micro Turbo Starter",
      description: "Design and development of a micro turbo starter with innovative engineering approaches. This project was awarded for its groundbreaking solutions in the field of mechanical engineering.",
      image: "https://tse4.mm.bing.net/th?id=OIP.yezxzlDwQ9LvZf-SzlwMWAHaHa&pid=Api",
      link: "https://leadpakistan.com.pk/news/38-uet-projects-showcased-at-project-exhibition-2016/?utm_source=chatgpt.com"
    },
    {
      title: "Centrifugal Boiler Design & Fabrication",
      description: "A project focusing on the design and fabrication of a centrifugal boiler, which earned the third prize in the UET Project Exhibition 2022.",
      image: "https://tse4.mm.bing.net/th?id=OIP.MeW5bjPALWyXayMEpyzAzgHaE9&pid=Api",
      link: "https://www.uetpeshawar.edu.pk/news/UET%20PR%20Project%20Exhibition%2005-08-2022.pdf?utm_source=chatgpt.com"
    },
    {
      title: "Orthopedic Implants using Reduced Graphene Oxide",
      description: "A research project on advanced materials for medical applications, focusing on graphene oxide reinforced ultra-high molecular weight polyethylene for orthopedic implants.",
      image: "https://tse2.mm.bing.net/th?id=OIP.tuzgSb6BRxEcTFOYJ6r7AQHaG7&pid=Api",
      link: "https://www.researchgate.net/scientific-contributions/Abdul-Shakoor-2296328596?utm_source=chatgpt.com"
    },
  ];

  return (
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Projects</h1>
        
        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0ff] font-bold hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;