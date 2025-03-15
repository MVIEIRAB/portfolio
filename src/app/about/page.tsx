export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Me</h1>
      
      <div className="space-y-12">
        {/* Personal Introduction */}
        <section className="bg-white p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gradient">Who I Am</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              I'm a developer who believes in the perfect balance between professional growth and personal well-being. 
              My journey is guided by the teachings of Jesus Christ, which help shape my approach to both life and work.
            </p>
            <p>
              Beyond coding, I'm an active person who enjoys various sports and physical activities. You'll often find me:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">⚽</span> Playing football with friends
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">💪</span> Working out at the gym
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏊‍♂️</span> Swimming laps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏃‍♂️</span> Going for runs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🚴‍♂️</span> Cycling around the city
              </li>
            </ul>
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section className="bg-white p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gradient">Interests & Hobbies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Gaming</h3>
              <p className="text-gray-600 mb-3">
                I'm an enthusiastic gamer who enjoys competitive gaming, particularly:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">🎮</span> MOBAs - Strategic team play
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">🎯</span> Shooters - Quick reflexes and precision
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Entertainment & Reading</h3>
              <p className="text-gray-600 mb-3">
                When I'm not coding or exercising, I enjoy:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">📺</span> Watching series and movies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">📚</span> Reading, with a special love for:
                  <ul className="ml-6 space-y-1">
                    <li>• Medieval stories</li>
                    <li>• Fiction novels</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Values */}
        <section className="bg-white p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gradient">Professional Philosophy</h2>
          <p className="text-gray-600">
            I believe in bringing the same dedication and discipline from my personal activities into my 
            professional work. My diverse interests help me maintain creativity and problem-solving skills, 
            while my faith guides my ethics and commitment to excellence in everything I do.
          </p>
        </section>
      </div>
    </div>
  );
} 