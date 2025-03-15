"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

export default function ViewExperienceLink() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add 1.5 second delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/experience');
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium gap-2"
    >
      <span className={isLoading ? 'animate-pulse' : ''}>
        {isLoading ? 'Loading...' : 'View Full Experience'}
      </span>
      <FaArrowRight className={`transition-transform duration-300 
        ${isLoading ? 'translate-x-1' : ''}`} />
    </button>
  );
} 