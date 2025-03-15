import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import ViewExperienceButton from '@/components/ViewExperienceButton';
import ViewExperienceLink from '@/components/ViewExperienceLink';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-32 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/57693776?v=4"
              alt="Profile Avatar"
              width={150}
              height={150}
              className="rounded-full border-4 border-yellow-500"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Full Stack Developer<br />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Focused on backend development and cloud solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ViewExperienceButton />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/MVIEIRAB"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mvieirab/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Node.js', 'React', 'TypeScript', 'Docker'].map((tech) => (
              <div key={tech} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Full-stack Developer</h3>
              <p className="text-yellow-600 font-medium mb-1">MZ Group</p>
              <p className="text-gray-600 text-sm mb-4">jun de 2024 - Present • São Paulo, Brasil</p>
              <p className="text-gray-600">Full stack development and web technologies</p>
            </div>
            
            <div className="text-center">
              <ViewExperienceLink />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 