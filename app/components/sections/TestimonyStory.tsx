import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const stories = [
  {
    title: "Dari Nilai Merah ke Juara Kelas",
    excerpt: "Dulu aku benci banget sama Matematika. Rasanya susah dan ngebosenin. Tapi setelah gabung di LWM, aku jadi ngerti konsep dasarnya. Ternyata Matematika itu seru kalau kita paham!",
    student: "Rina A.",
    school: "SMA Negeri 3 Bandung",
    grade: "Kelas 11",
    image: "bg-red-100",
    tags: ["Matematika", "Improvement"]
  },
  {
    title: "Lolos PTN Impian di Pilihan Pertama",
    excerpt: "Persiapan UTBK itu stressful banget. Untungnya kakak-kakak di LWM suportif banget. Mereka bantu aku susun strategi belajar dan pilih jurusan yang pas. Alhamdulillah lolos UI!",
    student: "Dimas P.",
    school: "SMA Negeri 8 Jakarta",
    grade: "Alumni 2024",
    image: "bg-blue-100",
    tags: ["UTBK", "UI"]
  },
  {
    title: "Belajar Bahasa Inggris Tanpa Rasa Takut",
    excerpt: "Aku dulu malu banget kalau disuruh ngomong Bahasa Inggris. Di LWM, lingkungannya mendukung banget. Kita diajak ngobrol santai, jadi lama-lama pede dan lancar.",
    student: "Sarah K.",
    school: "SMP Al-Azhar",
    grade: "Kelas 9",
    image: "bg-yellow-100",
    tags: ["Bahasa Inggris", "Confidence"]
  },
  {
    title: "Menemukan Bakat Terpendam di Sains",
    excerpt: "Eksperimen sains di LWM bikin aku jatuh cinta sama Fisika. Dulu cuma hafal rumus, sekarang aku paham kenapa rumusnya begitu. Nilai ujianku naik drastis!",
    student: "Budi S.",
    school: "SD Menteng 01",
    grade: "Kelas 6",
    image: "bg-green-100",
    tags: ["Sains", "Fisika"]
  }
];

export const TestimonyStory = () => {
  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Cerita Inspiratif</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">#CeritaLWM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap siswa punya cerita perjuangannya sendiri. Ini adalah kisah-kisah nyata tentang usaha, kegagalan, dan kemenangan mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row h-full">
              {/* Image / Visual Side */}
              <div className={`w-full md:w-2/5 ${story.image} min-h-[200px] md:min-h-0 relative p-6 flex flex-col justify-between`}>
                 <div className="flex flex-wrap gap-2">
                    {story.tags.map(tag => (
                        <span key={tag} className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700">{tag}</span>
                    ))}
                 </div>
                 <div className="mt-auto">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg mb-2">
                        {story.student.charAt(0)}
                    </div>
                    <p className="font-bold text-gray-900 leading-tight">{story.student}</p>
                    <p className="text-xs text-gray-600">{story.school}</p>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                    {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    "{story.excerpt}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">{story.grade}</span>
                    <button className="text-brand-orange text-sm font-bold hover:underline flex items-center gap-1">
                        Baca Selengkapnya
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
