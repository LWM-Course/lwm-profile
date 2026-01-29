import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const ParentsOffer = () => {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 opacity-20 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
             <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                   Berikan Pendidikan Terbaik untuk Buah Hati
                </h2>
                <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                   Jangan biarkan potensi anak terpendam. Bergabunglah dengan ribuan orang tua lainnya yang telah mempercayakan pendidikan anak mereka kepada LWM. Dapatkan sesi konsultasi gratis sekarang!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                   <Button variant="ghost" className="bg-white text-orange-600 hover:text-orange-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-md transition-transform hover:scale-105 focus:ring-orange-300 focus:ring-offset-white">
                      Daftar Sekarang
                   </Button>
                   <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-colors">
                      Konsultasi Gratis
                   </Button>
                </div>
             </div>
             
             {/* Visual Icon */}
             <div className="w-full md:w-auto flex justify-center">
                <div className="w-48 h-48 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg animate-pulse-slow">
                   <span className="text-6xl">🎓</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
