import React from 'react';
import { Button } from '../ui/Button';

interface FullWidthHeroProps {
  title: string;
  quote: string;
  description: string;
  imageClass: string;
}

export const FullWidthHero: React.FC<FullWidthHeroProps> = ({ title, quote, description, imageClass }) => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className={`absolute inset-0 z-0 ${imageClass} bg-cover bg-center`}>
         {/* Overlay for readability */}
         <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
          {title}
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
          <p className="text-2xl md:text-3xl font-serif italic mb-6 text-brand-yellow drop-shadow-sm">
            {quote}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {description}
          </p>
          <Button variant="primary" size="lg" className="shadow-lg hover:shadow-brand-orange/50">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};
