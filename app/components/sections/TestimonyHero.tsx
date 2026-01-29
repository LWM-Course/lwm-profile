import React from 'react';
import { Section } from '../ui/Section';

export const TestimonyHero = () => {
  return (
    <section className="relative w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Mereka yang telah <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Membuktikan Hasilnya</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Ribuan siswa telah bergabung dan meraih prestasi impian mereka. <br className="hidden md:block"/>
                Sekarang giliranmu untuk menulis cerita suksesmu sendiri.
             </p>
          </div>

          {/* Featured Testimony */}
          <div className="relative bg-orange-50 rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
             {/* Quote Icon */}
             <div className="absolute top-8 left-8 md:top-12 md:left-12 text-6xl md:text-8xl text-orange-200 font-serif opacity-50">"</div>

             <div className="lg:w-1/2 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                   "LWM bukan cuma tempat les, tapi rumah kedua buat aku. Kakak pengajarnya peduli banget, bukan cuma soal nilai, tapi juga mental aku."
                </h2>
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center text-2xl font-bold text-orange-600">
                      A
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-900">Amanda Putri</h4>
                      <p className="text-gray-600">Diterima di Kedokteran UGM 2024</p>
                   </div>
                </div>
             </div>

             <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-orange-200 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="relative bg-gray-200 rounded-3xl overflow-hidden aspect-video shadow-xl flex items-center justify-center group cursor-pointer">
                   {/* Placeholder Video Thumbnail */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                   </div>
                   <span className="absolute bottom-4 left-4 text-white font-medium">Tonton Cerita Amanda</span>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
