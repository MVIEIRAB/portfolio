"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

export default function ViewExperienceButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Add 1.5 second delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/experience');
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`px-8 py-4 bg-yellow-500 text-white rounded-full 
                hover:bg-yellow-600 transition-all flex items-center gap-2 font-medium
                ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      <span className={`${isLoading ? 'animate-pulse' : ''}`}>
        {isLoading ? 'Loading...' : 'View Experience'}
      </span>
      <FaArrowRight className={`transition-transform duration-300 
        ${isLoading ? 'translate-x-1' : ''}`} />
    </button>
  );
} 