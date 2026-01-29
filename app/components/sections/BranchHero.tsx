'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const BranchHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-cyan-50 via-teal-50 to-white py-20 lg:py-28 overflow-hidden">
      {/* Background Decoration (Map Dots) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-200 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute right-20 top-20 w-96 h-96 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indonesia_stub.svg/1200px-Indonesia_stub.svg.png')] bg-contain bg-no-repeat bg-center opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block text-sm font-semibold text-gray-500 mb-4 tracking-wide">
              Home <span className="mx-2">▸</span> Branch
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Bimbel tatap muka & online <br/>
              <span className="text-teal-500">LWM Center</span> kini hadir <br/>
              di ratusan kota se-Indonesia
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Dilengkapi fasilitas belajar modern, guru lulusan PTN, dan kelas tambahan untuk pengembangan diri. Coba kelas GRATIS di cabang terdekat sekarang!
            </p>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105 cursor-pointer"
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Temukan Cabang Terdekat
            </Button>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            {/* Circle Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-orange-100 to-teal-50 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] border-2 border-white/50 rounded-full"></div>
            
            {/* Map Image */}
            <div className="relative z-10 flex justify-center">
               <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indonesia_stub.svg/1200px-Indonesia_stub.svg.png" 
                    alt="Peta Lokasi Cabang LWM" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                  {/* Animated Location Pins */}
                  <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-bounce shadow-lg border-2 border-white"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-bounce delay-100 shadow-lg border-2 border-white"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-bounce delay-200 shadow-lg border-2 border-white"></div>
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300 shadow-lg border-2 border-white"></div>
               </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 right-0 lg:-right-4 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 max-w-[250px] animate-bounce delay-700 duration-[3000ms]">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                UI
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Diterima di Ilmu Hubungan Internasional</p>
                <p className="font-bold text-gray-900">Universitas Indonesia</p>
              </div>
            </div>

             {/* Name Tag */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-center w-full">
                <h3 className="text-xl font-bold text-gray-800">M. Rafi Rachman</h3>
                <p className="text-gray-500">LWM Center Cabang Bandung</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
