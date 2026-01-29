import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const testimonials = [
  { name: 'Budi Santoso', role: 'Orang Tua Siswa SD', text: 'Anak saya jadi lebih semangat belajar matematika sejak les di sini. Nilainya naik drastis!', image: '👨' },
  { name: 'Siti Aminah', role: 'Siswa SMA', text: 'Tutornya asik banget, cara ngejelasinnya mudah dimengerti. Masuk PTN impian jadi lebih optimis.', image: '👩' },
  { name: 'Andi Pratama', role: 'Alumni SMP', text: 'Fasilitasnya lengkap, temen-temennya seru. Belajar rasanya kayak main tapi tetep serius.', image: '👦' },
];

export const Testimony = () => {
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
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md mb-4">
                {item.image}
              </div>
              <p className="text-gray-700 italic relative z-10">{item.text}</p>
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
