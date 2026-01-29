'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface MapMarker {
  x: number
  y: number
  color?: string
  size?: number
  label?: string
  icon?: React.ReactNode
  tooltip?: string
}

interface BranchHeroProps {
  markers?: MapMarker[]
}

const defaultMarkers: MapMarker[] = [
  { x: 41.5, y: 75.5, color: '#ef4444', size: 18, label: 'Jakarta' },
  { x: 44.0, y: 78.5, color: '#ef4444', size: 16, label: 'Bandung' },
  { x: 56.5, y: 74.5, color: '#ef4444', size: 16, label: 'Surabaya' },
]

export const BranchHero = ({ markers = defaultMarkers }: BranchHeroProps) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-cyan-50 via-teal-50 to-white py-20 lg:py-28 overflow-hidden">
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
              di kota-kota besar Indonesia
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

          {/* Right: Responsive Map */}
          <div className="flex-[1.2] relative w-full lg:min-w-[600px] xl:min-w-[700px]">
            <div className="relative w-full mx-auto transform lg:scale-110 lg:origin-right">
              <div className="relative w-full" style={{ paddingBottom: '40%' }}>
                <img
                  src="/indonesia.svg"
                  alt="Peta Indonesia"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
                />
                {markers.map((m, idx) => (
                  <div
                    key={idx}
                    aria-label={m.label || 'Lokasi'}
                    title={m.tooltip || m.label}
                    className="absolute"
                    style={{
                      left: `${m.x}%`,
                      top: `${m.y}%`,
                      transform: 'translate(-50%,-100%)',
                    }}
                  >
                    <div
                      className="relative"
                      style={{ width: m.size || 18, height: (m.size || 18) * 1.4 }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-full drop-shadow-md"
                        style={{ width: m.size || 18, height: m.size || 18 }}
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                          fill={m.color || '#ef4444'}
                        />
                      </svg>
                      {m.icon && (
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                          {m.icon}
                        </div>
                      )}
                    </div>
                    {m.label && (
                      <div className="mt-1 text-xs font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                        {m.label}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
