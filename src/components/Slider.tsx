'use client';

import React, { useState, useEffect } from 'react';
import {
  FileCode2,
  Blocks,
  Wind,
  Server,
  Database,
  Network,
  Container,
  Figma,
} from 'lucide-react';
import { FaReact, FaCss3, FaHtml5, FaJs, FaAws } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

interface LogoSliderProps {
  logos?: { icon: React.ElementType; name: string }[];
  interval?: number;
}

export default function LogoSlider({
  logos = [
    { icon: FileCode2, name: 'Next.js' },
    { icon: Blocks, name: 'TypeScript' },
    { icon: Wind, name: 'Tailwind CSS' },
    { icon: Server, name: 'Node.js' },
    { icon: Database, name: 'MongoDB' },
    { icon: Network, name: 'GraphQL' },
    { icon: Container, name: 'Docker' },
    { icon: Figma, name: 'figma' },
    { icon: FaReact, name: 'React' },
    { icon: FaCss3, name: 'Css' },
    { icon: FaHtml5, name: 'Html' },
    { icon: FaJs, name: 'Js' },
    { icon: FaAws, name: 'AWS' },
    { icon: SiAdobephotoshop, name: 'Photoshop' },
    { icon: SiAdobeillustrator, name: 'illustrator' },
  ],
  interval = 3000,
}: LogoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (logos.length - 3));
    }, interval);

    return () => clearInterval(timer);
  }, [logos.length, interval]);

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 rounded-lg shadow-lg">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/4 px-4">
              <div className="flex flex-col items-center">
                <logo.icon className="sm:w-12 sm:h-12 w-8 h-8 mb-2 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
