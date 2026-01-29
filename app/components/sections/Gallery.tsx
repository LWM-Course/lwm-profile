'use client';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { Section } from '../ui/Section';

interface GalleryItem {
  title: string;
  image?: {
    url: string;
  };
  color?: string;
}

const defaultGalleryItems: GalleryItem[] = [
  { title: 'Ruang Kelas Nyaman', color: 'bg-red-200' },
  { title: 'Laboratorium Komputer', color: 'bg-blue-200' },
  { title: 'Perpustakaan Lengkap', color: 'bg-green-200' },
  { title: 'Area Diskusi', color: 'bg-yellow-200' },
  { title: 'Ruang Santai', color: 'bg-purple-200' },
  { title: 'Kantin Sehat', color: 'bg-pink-200' },
];

interface GalleryProps {
  data?: {
    galleryImages?: GalleryItem[];
  } | null;
}

export const Gallery = ({ data }: GalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const galleryItems = data?.galleryImages && data.galleryImages.length > 0 ? data.galleryImages : defaultGalleryItems;

  // Triple the items for smoother infinite scrolling buffer
  const displayItems = [...galleryItems, ...galleryItems, ...galleryItems];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1; // Auto-scroll speed
        
        // Infinite Loop Logic
        const oneSetWidth = scrollContainer.scrollWidth / 3;
        
        if (scrollContainer.scrollLeft >= oneSetWidth * 2) {
           scrollContainer.scrollLeft -= oneSetWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
           scrollContainer.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Galeri Fasilitas</h2>
        <p className="text-gray-600">Suasana belajar yang kondusif dan fasilitas lengkap untuk mendukung prestasi.</p>
      </div>

      <div className="relative group max-w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 hide-scrollbar w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {displayItems.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-md relative group/item hover:scale-105 transition-transform duration-300 select-none bg-gray-100"
            >
              {item.image?.url ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className={`w-full h-full ${item.color || 'bg-gray-200'} flex items-center justify-center text-gray-500 font-medium`}>
                   {/* Placeholder Image */}
                   Image: {item.title}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover/item:translate-y-0 transition-transform">
                <p className="text-white font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
