"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-gradient">
            MVIEIRAB
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="/" className="text-gray-600 hover:text-yellow-500 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-yellow-500 transition-colors">About</Link></li>
            <li><Link href="/experience" className="text-gray-600 hover:text-yellow-500 transition-colors">Experience</Link></li>
            <li><Link href="/skills" className="text-gray-600 hover:text-yellow-500 transition-colors">Skills</Link></li>
            <li>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100">
            <ul className="px-6 py-4 space-y-4">
              <li><Link href="/" className="block text-gray-600 hover:text-yellow-500">Home</Link></li>
              <li><Link href="/about" className="block text-gray-600 hover:text-yellow-500">About</Link></li>
              <li><Link href="/experience" className="block text-gray-600 hover:text-yellow-500">Experience</Link></li>
              <li><Link href="/skills" className="block text-gray-600 hover:text-yellow-500">Skills</Link></li>
              <li><Link href="/contact" className="block text-gray-600 hover:text-yellow-500">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
} 