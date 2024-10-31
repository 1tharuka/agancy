'use client';

import React, { useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ScrollItemProps {
  children: ReactNode;
  className?: string;
}

export interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  image2: string;
}

interface HorizontalScrollerProps {
  items?: Array<BlogItem>;
  scrollAmount?: number;
  className?: string;
}

const ScrollItem = ({ children, className = '' }: ScrollItemProps) => (
  <div className={`flex-none  rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const BlogCard = ({ item }: { item: BlogItem }) => (
  <article className="w-80 h-full flex flex-col">
    <div className="relative h-48 w-full">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover rounded-t-lg"
      />
      <div className="absolute top-4 left-4"></div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="mt-2 text-xl font-semibold line-clamp-2 flex flex-row gap-3">
        <Image
          src={item.image2}
          alt="witer"
          className="object-cover rounded-full"
          width={50}
          height={50}
        />
        {item.title}
      </h3>
      <p className="mt-2 text-gray-400 text-sm line-clamp-3">{item.excerpt}</p>
    </div>
  </article>
);

export function Blog({
  items = [],
  scrollAmount = 300,
  className = '',
}: HorizontalScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetScroll =
      container.scrollLeft +
      (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  // Generate default items if none provided
  const defaultItems: BlogItem[] = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Sample Blog Post ${i + 1}`,
    excerpt:
      'This is a sample blog post excerpt. Click to read more about this interesting topic.',
    image: `/pexImag.jpg`,
    image2: '/CEO.png', // Fixed: changed to string
    category: 'Sample',
  }));

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className={`relative w-full ${className}`}>
      {displayItems.length > 0 && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1F1C1C] rounded-full p-2 shadow-lg  transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1F1C1C] rounded-full p-2 shadow-lg transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {displayItems.map((item) => (
          <ScrollItem key={item.id} className="h-[28rem]">
            <BlogCard item={item} />
          </ScrollItem>
        ))}
      </div>
    </div>
  );
}
