import React from 'react';
import Link from 'next/link';
import { Section } from '../../components/ui/Section';

// Dummy data for blog posts (in a real app, this would come from a CMS or API)
const allPosts = [
  {
    id: 1,
    title: "5 Strategi Jitu Lolos UTBK-SNBT 2026",
    excerpt: "Persiapkan diri kamu menghadapi seleksi masuk PTN dengan strategi yang terbukti efektif meloloskan ribuan siswa.",
    category: "info-ptn",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Tim Akademik LWM",
    date: "29 Jan 2026",
    readTime: "5 min baca"
  },
  {
    id: 2,
    title: "Pentingnya Menjaga Kesehatan Mental Saat Ujian",
    excerpt: "Jangan sampai stres mengganggu performa belajarmu. Simak tips menjaga keseimbangan mental dan akademik.",
    category: "tips-belajar",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Miss Melati",
    date: "25 Jan 2026",
    readTime: "4 min baca"
  },
  {
    id: 3,
    title: "Cara Mendampingi Anak Belajar di Rumah Tanpa Drama",
    excerpt: "Panduan untuk orang tua agar suasana belajar di rumah tetap kondusif dan menyenangkan bagi anak.",
    category: "parenting",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Psikolog LWM",
    date: "20 Jan 2026",
    readTime: "7 min baca"
  },
  {
    id: 4,
    title: "Try Out Akbar LWM 2026 Segera Hadir!",
    excerpt: "Ikuti Try Out Akbar LWM untuk mengukur kemampuanmu sebelum menghadapi ujian sesungguhnya. Hadiah menarik menanti!",
    category: "event",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Admin Event",
    date: "15 Jan 2026",
    readTime: "2 min baca"
  },
   {
    id: 5,
    title: "Teknik Pomodoro: Belajar Lebih Efektif",
    excerpt: "Kenali teknik belajar Pomodoro yang dapat meningkatkan fokus dan produktivitas belajarmu secara signifikan.",
    category: "tips-belajar",
    image: "https://images.unsplash.com/photo-1456324504439-367cee10d6e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Kak Budi",
    date: "10 Jan 2026",
    readTime: "6 min baca"
  },
  {
    id: 6,
    title: "Jadwal Pendaftaran PTN Jalur Mandiri 2026",
    excerpt: "Catat tanggal penting pendaftaran jalur mandiri di berbagai PTN favorit di Indonesia.",
    category: "info-ptn",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Tim Riset",
    date: "05 Jan 2026",
    readTime: "3 min baca"
  }
];

const categoryTitles: Record<string, string> = {
  'tips-belajar': 'Tips Belajar',
  'info-ptn': 'Info PTN',
  'parenting': 'Parenting',
  'event': 'Event LWM'
};

export async function generateStaticParams() {
  return [
    { category: 'tips-belajar' },
    { category: 'info-ptn' },
    { category: 'parenting' },
    { category: 'event' },
  ];
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const title = categoryTitles[category] || 'Artikel';
  const posts = allPosts.filter(post => post.category === category);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">Kategori</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan kumpulan artikel terbaik seputar {title} yang telah kami kurasi khusus untuk Anda.
          </p>
        </div>
      </div>

      {/* Post Grid */}
      <div className="container mx-auto px-4 max-w-7xl mt-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-orange uppercase">
                    {title}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                    <Link href={`/blog/${category}/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                        {post.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada artikel</h3>
            <p className="text-gray-600">Nantikan artikel menarik seputar {title} segera.</p>
          </div>
        )}
      </div>
    </div>
  );
}
