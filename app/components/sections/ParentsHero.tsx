import React from 'react';
import { Button } from '../ui/Button';

export const ParentsHero = () => {
  return (
    <section className="relative w-full bg-orange-50/50 py-20 lg:py-28 overflow-hidden">
       <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
             
             {/* Left Content */}
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-block text-sm font-semibold text-gray-500 mb-4 tracking-wide">
                  Home <span className="mx-2">▸</span> Parents
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                   Persiapkan Masa Depan <br/>
                   Cerah untuk Anak <br/>
                   dengan <span className="text-brand-orange">LWM Center</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                   Dukung dan fasilitasi anak dengan bimbingan belajar berkualitas yang akan membantu anak anda meraih cita-cita
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                   Gabung Komunitas Orang Tua
                </Button>
             </div>

             {/* Right Image */}
             <div className="flex-1 relative w-full flex justify-end items-end">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-8 h-8 text-yellow-300 animate-bounce">✦</div>
                <div className="absolute top-40 left-10 w-6 h-6 text-yellow-300 animate-pulse">✦</div>
                
                {/* Background Pattern */}
                <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/zig-zag.png')] opacity-10 mix-blend-multiply"></div>

                <div className="relative z-10 w-full max-w-lg">
                   {/* Parents Image */}
                   <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Keluarga Bahagia" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
