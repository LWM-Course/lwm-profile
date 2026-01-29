'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';

const faqData = [
  { question: 'Apakah ada kelas percobaan gratis?', answer: 'Ya, kami menyediakan kelas percobaan gratis (Free Trial) untuk semua jenjang. Silakan klik tombol "Coba Kelas Gratis" untuk mendaftar.' },
  { question: 'Berapa jumlah maksimal siswa dalam satu kelas?', answer: 'Untuk menjaga kualitas pembelajaran, kami membatasi maksimal 10 siswa untuk kelas reguler dan 5 siswa untuk kelas intensif.' },
  { question: 'Apakah jadwal belajar bisa disesuaikan?', answer: 'Tentu! Kami memiliki beberapa pilihan jadwal (pagi, siang, sore) yang bisa Anda pilih sesuai ketersediaan waktu siswa.' },
  { question: 'Bagaimana metode pembayarannya?', answer: 'Pembayaran dapat dilakukan melalui transfer bank, dompet digital (OVO, GoPay), atau tunai di cabang terdekat. Tersedia juga opsi cicilan.' },
  { question: 'Apakah ada garansi kenaikan nilai?', answer: 'Kami berkomitmen memberikan bimbingan terbaik. Jika siswa mengikuti seluruh program dengan baik namun nilai tidak memuaskan, kami menyediakan sesi konsultasi dan bimbingan tambahan gratis.' },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pertanyaan Umum (FAQ)</h2>
        <p className="text-gray-600">Jawaban untuk pertanyaan yang sering diajukan.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-gray-800 text-lg">{item.question}</span>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
