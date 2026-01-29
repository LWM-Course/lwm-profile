import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const facilities = [
  { icon: 'wifi', title: 'Free Wi-Fi', desc: 'Koneksi internet super cepat di seluruh area.' },
  { icon: 'ac', title: 'Ruang Ber-AC', desc: 'Ruang kelas nyaman dengan pendingin ruangan.' },
  { icon: 'book', title: 'Modul Lengkap', desc: 'Bahan ajar kurikulum terbaru dan komprehensif.' },
  { icon: 'users', title: 'Diskusi Kelompok', desc: 'Area khusus untuk belajar kelompok dan diskusi.' },
  { icon: 'video', title: 'Kelas Online', desc: 'Fasilitas hybrid learning untuk fleksibilitas.' },
  { icon: 'coffee', title: 'Snack & Minum', desc: 'Disediakan snack dan air mineral gratis.' },
];

export const Facility = () => {
  return (
    <Section background="yellow">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Fasilitas Unggulan</h2>
        <p className="text-gray-700">Kami menyediakan fasilitas terbaik untuk mendukung kenyamanan belajar siswa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((item, index) => (
          <Card key={index} className="flex items-start gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0 text-xl font-bold">
               {/* Simple Icon Placeholder using first letter or emoji */}
               {item.icon === 'wifi' && '📶'}
               {item.icon === 'ac' && '❄️'}
               {item.icon === 'book' && '📚'}
               {item.icon === 'users' && '👥'}
               {item.icon === 'video' && '💻'}
               {item.icon === 'coffee' && '☕'}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
