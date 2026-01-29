import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const Hero = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-brand-orange-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block bg-brand-yellow/20 text-brand-orange font-bold px-4 py-2 rounded-full text-sm mb-2">
            #1 Kursus Terpercaya
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Belajar Jadi Lebih <span className="text-brand-orange">Seru</span> dan <span className="text-brand-yellow">Menyenangkan!</span>
          </h1>
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-gray-600 text-lg">
            "Pendidikan bukan persiapan untuk hidup; pendidikan adalah hidup itu sendiri."
          </blockquote>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bergabunglah bersama kami untuk pengalaman belajar yang interaktif, modern, dan mendukung potensi terbaik buah hati Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 transform hover:-translate-y-1 transition-all">
              Daftar Sekarang
            </Button>
            <Button variant="outline" size="lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden relative">
               {/* Placeholder for Hero Image */}
               <div className="w-full h-full bg-brand-orange-light flex items-center justify-center text-brand-orange font-bold text-xl">
                 Hero Image
               </div>
               {/* 
               <img 
                 src="/hero-image.jpg" 
                 alt="Students learning" 
                 className="w-full h-full object-cover"
               />
               */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
