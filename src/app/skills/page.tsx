export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-16">Skills & Technologies</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Backend Development */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Backend Development</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Node.js</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Express</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">NestJS</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Other Backend Skills:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Restify</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">HapiJS</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">AdonisJS</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">REST APIs</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">WebSockets</span>
            </div>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Frontend Development</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">React</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">TypeScript</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Next.js</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Additional Frontend Skills:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">HTML5</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">CSS3</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Tailwind</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">AngularJS</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Responsive Design</span>
            </div>
          </div>
        </div>

        {/* Testing & Quality */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Testing & Quality</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Jest</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Cypress</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Mocha</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Testing Practices:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Unit Testing</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Integration Testing</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">E2E Testing</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">TDD</span>
            </div>
          </div>
        </div>

        {/* Databases & Storage */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm0 5h7m-7 3h7m4-8v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S15 5 15 7zm0 5h7m-7 3h7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Databases & Storage</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">PostgreSQL</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">MongoDB</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Redis</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Additional Database Experience:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">MySQL</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">SQLite</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">AWS S3</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Prisma</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">TypeORM</span>
            </div>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Docker</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">AWS</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">CI/CD</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Cloud & DevOps Tools:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Kubernetes</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">GitHub Actions</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">AWS SES</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">AWS SQS</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Digital Ocean</span>
            </div>
          </div>
        </div>

        {/* Tools & Practices */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Tools & Practices</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Git</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Jira</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Agile</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Additional Skills:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Problem Solving</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Code Review</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Documentation</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Team Leadership</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 