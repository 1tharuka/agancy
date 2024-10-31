'use client';
import { CircleArrowOutUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const TextSlider = () => {
  const [position, setPosition] = useState(0);

  // Array of tech items with emojis and text
  const items = [
    { text: 'Let’s Get It Started ' },
    { text: 'Let’s Get It Started' },
    { text: 'Let’s Get It Started' },
    { text: 'Let’s Get It Started' },
    { text: 'Let’s Get It Started' },
    { text: 'Let’s Get It Started' },
  ];

  // Duplicate items array for seamless loop
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setPosition((prev) => {
        // Reset position when reaching the end
        if (prev <= -50) {
          return 0;
        }
        return prev - 0.5;
      });
    }, 30);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full overflow-hidden  py-8 cursor-none">
      <div className="relative">
        <div
          className="flex whitespace-nowrap transition-transform duration-1000"
          style={{
            transform: `translateX(${position}%)`,
          }}
        >
          {duplicatedItems.map(({ text }, index) => (
            <div key={index} className="flex flex-row gap-20">
              <span className="sm:text-8xl text-3xl font-medium transition-transform hover:scale-110 ml-20 flex gap-3">
                {text}.
                <CircleArrowOutUpRight className="text-7xl " />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
