import React from 'react';
import { Section } from '../ui/Section';

const parentStories = [
  {
    name: "Ibu Ratna",
    role: "Orang Tua Siswa SD",
    image: "👩‍💼",
    quote: "LWM benar-benar membantu saya memantau perkembangan belajar anak. Laporannya detail dan tutornya komunikatif.",
    rating: 5
  },
  {
    name: "Bapak Hendra",
    role: "Orang Tua Siswa SMA",
    image: "👨‍💼",
    quote: "Anak saya jadi lebih disiplin dan punya target yang jelas buat masuk PTN. Terima kasih LWM atas bimbingannya.",
    rating: 5
  },
  {
    name: "Ibu Sarah",
    role: "Orang Tua Siswa SMP",
    image: "👩‍⚕️",
    quote: "Lingkungan belajarnya positif banget. Anak saya yang tadinya pemalu sekarang jadi lebih aktif di kelas.",
    rating: 5
  }
];

export const ParentsStories = () => {
  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cerita Orang Tua</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Pengalaman nyata dari para orang tua yang telah merasakan dampak positif LWM bagi perkembangan akademik dan karakter anak mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {parentStories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                   {story.image}
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">{story.name}</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-wide">{story.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-yellow-400 text-sm">
                 {[...Array(story.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>

              <p className="text-gray-600 italic leading-relaxed flex-grow">
                 "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
