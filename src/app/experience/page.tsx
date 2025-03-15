import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      title: "Full-stack Developer",
      company: "MZ Group",
      period: "jun de 2024 - Present (10 months)",
      location: "São Paulo, Brasil",
      description: [
        "Full stack development and web technologies",
      ],
      skills: ["Full Stack", "Web Technologies"]
    },
    {
      title: "Software Engineer Jr",
      company: "Semantix",
      period: "mai de 2022 - mai de 2024 (2 years 1 month)",
      location: "São Paulo, Brasil",
      description: [
        "Responsible for developing and maintaining projects, ensuring complete end-to-end integration according to our clients' needs.",
        "With a focus on improving the tools we work with, I always seek to support the development of new features and fix specific bugs.",
        "Working with Agile Methodology (SCRUM). Using Jira tool we set up the action plan for sprints, measuring efforts, gathering requirements, understanding the contexts of need for a new feature through use cases."
      ],
      skills: ["JavaScript", "Node.js", "Agile", "SCRUM", "Jira"]
    },
    {
      title: "Desenvolvedor Fullstack Pleno",
      company: "DDR Technologies",
      period: "fev de 2022 - mai de 2022 (4 months)",
      location: "São Paulo, Brasil",
      description: [
        "Specialized in providing CRM (Customer Relationship Management), BPM (Business Process Management) and Voice Call Manager solutions.",
        "Extensive experience in customization and integration of solutions.",
        "Services for small, medium and large companies in different segments."
      ],
      skills: [
        "Back-End: Express, AdonisJs, NestJS",
        "Front-End: AngularJs, ReactJs",
        "Database: PostgreSQL, MongoDB, Redis",
        "Cloud: AWS, Digital Ocean",
        "DevOps: Docker, Kubernetes, Github Actions CI/CD"
      ]
    },
    {
      title: "Desenvolvedor Jr",
      company: "CMV Solutions",
      period: "jul de 2019 - jan de 2020 (7 months)",
      location: "São Paulo, Brasil",
      description: [
        "Used Node.JS in back-end for registration process automation scripts.",
        "Consulting reference products in databases: MYSQL/MONGODB and creating/updating if necessary within the client's database.",
        "Real-time training (video call) instructing users on platform usage and other related processes."
      ],
      skills: ["Node.js", "MySQL", "MongoDB", "Technical Support"]
    },
    {
      title: "Técnico de hardware de informática",
      company: "Horizon Solucoes",
      period: "mar de 2017 - fev de 2019 (2 years)",
      location: "São Paulo e Região, Brasil",
      description: [
        "Technical support for hardware and software (Cellphones, computers, notebooks, printers).",
        "Equipment documentation describing problems and solutions.",
        "On-site and remote technical support (team viewer).",
        "Responsible for purchasing parts for maintenance and logistics."
      ],
      skills: ["Technical Support", "Hardware", "Customer Service"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
} 