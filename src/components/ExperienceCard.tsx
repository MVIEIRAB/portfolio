type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
};

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  location, 
  description,
  skills 
}: ExperienceProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-100 hover:border-yellow-500 transition-colors">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-yellow-600 font-medium">{company}</p>
        <div className="text-gray-600 text-sm mt-1">
          <span>{period}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {description.map((item, index) => (
          <p key={index} className="text-gray-600">
            {item}
          </p>
        ))}
      </div>

      {skills && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 