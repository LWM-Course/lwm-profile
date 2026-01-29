'use client';
import React, { useState, useEffect } from 'react';
import { Section } from '../ui/Section';

interface Feature {
  title: string;
  description: string;
  image: string; // CSS class for placeholder background
}

interface FeatureCarouselProps {
  features: Feature[];
}

export const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  
  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);


  return (
    <Section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="relative bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden min-h-[500px] flex items-center">
            
          {/* Background Gradient Decoration */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-50/50 to-transparent pointer-events-none"></div>

          {/* Navigation Buttons (Absolute) */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-8 z-20 bg-white shadow-lg hover:bg-gray-50 text-brand-orange p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-8 z-20 bg-white shadow-lg hover:bg-gray-50 text-brand-orange p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
             aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Slides Container */}
          <div className="w-full h-full relative z-10">
             {/* We only render the current slide with a transition effect */}
             <div className="flex flex-col md:flex-row items-center h-full w-full p-8 md:p-16 gap-8 md:gap-12 transition-opacity duration-500 ease-in-out">
                
                {/* Left: Image Placeholder */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                   <div className={`w-full max-w-sm aspect-[4/5] ${features[currentIndex].image} rounded-3xl shadow-inner flex items-center justify-center relative overflow-hidden group`}>
                      {/* Placeholder UI Elements mimicking the chat interface in the image */}
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
                      <div className="relative bg-white p-4 rounded-2xl shadow-lg w-3/4 transform transition-transform duration-500 group-hover:scale-105">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div>
                               <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                               <div className="h-2 w-16 bg-gray-100 rounded"></div>
                            </div>
                         </div>
                         <div className="space-y-2">
                             <div className="h-2 w-full bg-gray-100 rounded"></div>
                             <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                             <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                         </div>
                      </div>
                      
                      {/* Floating Avatars */}
                      <div className="absolute top-10 left-4 w-12 h-12 rounded-full bg-orange-200 border-2 border-white shadow-md animate-bounce delay-100"></div>
                      <div className="absolute bottom-10 right-4 w-14 h-14 rounded-full bg-blue-200 border-2 border-white shadow-md animate-bounce delay-300"></div>
                   </div>
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <div className="inline-block p-2 rounded-lg bg-blue-50 mb-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                     {features[currentIndex].title}
                   </h2>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     {features[currentIndex].description}
                   </p>
                </div>

             </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-brand-orange w-8' 
                    : 'bg-gray-300 hover:bg-brand-orange/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
};
