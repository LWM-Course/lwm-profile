import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import Image from 'next/image';

interface HeroProps {
  data?: {
    badge?: string;
    headline?: string;
    subheadline?: string;
    description?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText?: string;
    ctaSecondaryLink?: string;
    image?: {
      url: string;
    };
  };
}

export const Hero = ({ data }: HeroProps) => {
  const {
    badge = "#1 Kursus Terpercaya",
    headline = "Belajar Jadi Lebih <span class='text-brand-orange'>Seru</span> dan Menyenangkan!",
    subheadline = "Pendidikan bukan persiapan untuk hidup; pendidikan adalah hidup itu sendiri.",
    description = "Bergabunglah bersama kami untuk pengalaman belajar yang interaktif, modern, dan mendukung potensi terbaik buah hati Anda.",
    ctaPrimaryText = "Daftar Sekarang",
    ctaPrimaryLink = "#",
    ctaSecondaryText = "Pelajari Lebih Lanjut",
    ctaSecondaryLink = "#",
    image
  } = data || {};

  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-brand-orange-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block bg-brand-yellow/20 text-brand-orange font-bold px-4 py-2 rounded-full text-sm mb-2">
            {badge}
          </div>
          <h1 
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-gray-600 text-lg">
            "{subheadline}"
          </blockquote>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button as="a" href={ctaPrimaryLink} size="lg" className="shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 transform hover:-translate-y-1 transition-all">
              {ctaPrimaryText}
            </Button>
            <Button as="a" href={ctaSecondaryLink} variant="outline" size="lg">
              {ctaSecondaryText}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden relative">
               {image ? (
                 <Image 
                   src={image.url} 
                   alt="Hero Image" 
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover"
                 />
               ) : (
                 <div className="w-full h-full bg-brand-orange-light flex items-center justify-center text-brand-orange font-bold text-xl">
                   Hero Image
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
