export default function LoadingExperience() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
      
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/4 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 