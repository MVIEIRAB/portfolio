export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:mvieirinhaa@gmail.com" className="text-blue-600 hover:text-blue-800">
            mvieirinhaa@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/mvieirab/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Matheus
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/MVIEIRAB"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            MVIEIRAB
          </a>
        </p>
      </div>
    </div>
  );
} 