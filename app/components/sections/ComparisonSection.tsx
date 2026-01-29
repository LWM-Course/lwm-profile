import React from 'react';
import { Section } from '../ui/Section';

export const ComparisonSection = () => {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kenapa Memilih LWM?</h2>
          <p className="text-gray-600">
             Lihat perbandingan kami dengan bimbingan belajar konvensional lainnya.
          </p>
        </div>

        <div className="overflow-x-auto pt-8 pb-4">
          <table className="w-full border-collapse min-w-[600px]">
             <thead>
                <tr>
                   <th className="p-4 text-left w-1/3"></th>
                   <th className="p-6 bg-[#f97316] text-white rounded-t-2xl text-center w-1/3 text-xl font-bold shadow-lg relative z-10">
                      LWM Center
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-[#f97316] text-xs px-4 py-1.5 rounded-full shadow-sm font-bold tracking-wide whitespace-nowrap">
                         TERBAIK
                      </div>
                   </th>
                   <th className="p-6 bg-gray-100 text-gray-600 rounded-t-2xl text-center w-1/3 text-xl font-bold opacity-70">
                      Bimbel Lain
                   </th>
                </tr>
             </thead>
             <tbody className="text-gray-700">
                {[
                   { feature: 'Metode Belajar', lwm: 'Personal & Adaptif', other: 'Klasikal / Umum' },
                   { feature: 'Kualitas Pengajar', lwm: 'Lulusan PTN Favorit & Tersertifikasi', other: 'Mahasiswa / Umum' },
                   { feature: 'Laporan Perkembangan', lwm: 'Real-time via Aplikasi & Konsultasi', other: 'Per Semester / Jarang' },
                   { feature: 'Konsultasi PR', lwm: 'Tersedia Setiap Hari (Online/Offline)', other: 'Terbatas Jadwal' },
                   { feature: 'Fasilitas Tambahan', lwm: 'Kelas Minat Bakat & Soft Skill', other: 'Tidak Ada' },
                ].map((row, idx) => (
                   <tr key={idx} className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">{row.feature}</td>
                      <td className="p-4 bg-orange-50 text-center text-[#f97316] font-semibold border-x border-orange-100">
                         <div className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            {row.lwm}
                         </div>
                      </td>
                      <td className="p-4 bg-gray-50 text-center text-gray-500 border-x border-gray-100">
                         {row.other}
                      </td>
                   </tr>
                ))}
             </tbody>
             <tfoot>
                <tr>
                   <td></td>
                   <td className="p-4 bg-orange-50 rounded-b-2xl border-x border-b border-orange-100"></td>
                   <td className="p-4 bg-gray-50 rounded-b-2xl border-x border-b border-gray-100"></td>
                </tr>
             </tfoot>
          </table>
        </div>
      </div>
    </Section>
  );
};
