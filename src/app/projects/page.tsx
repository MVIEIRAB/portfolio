const projectList = [
  {
    title: 'SIP Integration Project',
    description: 'Implementation of SIP protocol with Node.js',
    link: 'https://github.com/MVIEIRAB/sip-project',
  },
  {
    title: 'FullStack E-commerce',
    description: 'React + Node + PostgreSQL, Dockerized application',
    link: 'https://github.com/MVIEIRAB/ecommerce',
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 