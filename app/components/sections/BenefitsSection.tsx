import React from 'react';
import { Section } from '../ui/Section';

const benefits = [
  {
    title: "Pemahaman Konsep Mendalam",
    desc: "Anak tidak hanya menghafal, tapi memahami konsep dasar sehingga mampu memecahkan masalah kompleks.",
    icon: "🧠"
  },
  {
    title: "Karakter & Kedisiplinan",
    desc: "Kami menanamkan nilai-nilai positif dan kebiasaan belajar yang baik sejak dini.",
    icon: "⭐"
  },
  {
    title: "Kesiapan Masa Depan",
    desc: "Mempersiapkan anak menghadapi tantangan akademik di jenjang yang lebih tinggi dan dunia kerja.",
    icon: "🚀"
  },
  {
    title: "Ketenangan Pikiran Orang Tua",
    desc: "Anda bisa tenang mengetahui anak berada di lingkungan yang tepat dengan progres yang terpantau.",
    icon: "💖"
  }
];

export const BenefitsSection = () => {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manfaat Bergabung Bersama Kami</h2>
          <p className="text-gray-600">
             Investasi terbaik untuk masa depan buah hati Anda dimulai dari sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-orange-50 transition-colors duration-300">
               <div className="w-16 h-16 bg-orange-100 text-3xl flex items-center justify-center rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {benefit.icon}
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
               <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
