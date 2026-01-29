import React from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  photo?: {
    url: string;
  };
}

interface TestimonyProps {
  data?: {
    testimonials?: TestimonialItem[];
  };
}

const defaultTestimonials: TestimonialItem[] = [
  { name: 'Budi Santoso', role: 'Orang Tua Siswa SD', quote: 'Anak saya jadi lebih semangat belajar matematika sejak les di sini. Nilainya naik drastis!', photo: { url: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=random' } }, // Using placeholder URL or emoji
  { name: 'Siti Aminah', role: 'Siswa SMA', quote: 'Tutornya asik banget, cara ngejelasinnya mudah dimengerti. Masuk PTN impian jadi lebih optimis.', photo: { url: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=random' } },
  { name: 'Andi Pratama', role: 'Alumni SMP', quote: 'Fasilitasnya lengkap, temen-temennya seru. Belajar rasanya kayak main tapi tetep serius.', photo: { url: 'https://ui-avatars.com/api/?name=Andi+Pratama&background=random' } },
];

export const Testimony = ({ data }: TestimonyProps) => {
  const testimonials = data?.testimonials && data.testimonials.length > 0 ? data.testimonials : defaultTestimonials;

  return (
    <Section id="testimony" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Apa Kata Mereka?</h2>
        <p className="text-gray-600">Cerita sukses dari siswa dan orang tua yang telah bergabung bersama kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="bg-brand-orange-light border-none relative">
            <div className="absolute top-4 right-8 text-6xl text-brand-orange/20 font-serif">"</div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md mb-4 overflow-hidden relative">
                <img 
                  src={item.photo?.url || `https://api.dicebear.com/9.x/lorelei/svg?seed=${item.name}`}
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic relative z-10">{item.quote}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-brand-orange font-medium">{item.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
