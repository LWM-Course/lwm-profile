import React from 'react';
import { Section } from '../components/ui/Section';

const featuredPosts = [
  {
    id: 1,
    title: "5 Strategi Jitu Lolos UTBK-SNBT 2026",
    excerpt: "Persiapkan diri kamu menghadapi seleksi masuk PTN dengan strategi yang terbukti efektif meloloskan ribuan siswa.",
    category: "Info PTN",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Tim Akademik LWM",
    date: "29 Jan 2026",
    readTime: "5 min baca"
  },
  {
    id: 2,
    title: "Pentingnya Menjaga Kesehatan Mental Saat Ujian",
    excerpt: "Jangan sampai stres mengganggu performa belajarmu. Simak tips menjaga keseimbangan mental dan akademik.",
    category: "Tips Belajar",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Miss Melati",
    date: "25 Jan 2026",
    readTime: "4 min baca"
  },
  {
    id: 3,
    title: "Cara Mendampingi Anak Belajar di Rumah Tanpa Drama",
    excerpt: "Panduan untuk orang tua agar suasana belajar di rumah tetap kondusif dan menyenangkan bagi anak.",
    category: "Parenting",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Psikolog LWM",
    date: "20 Jan 2026",
    readTime: "7 min baca"
  }
];

const categories = [
  { name: 'Tips Belajar', count: 42, icon: '📚' },
  { name: 'Info PTN', count: 28, icon: '🎓' },
  { name: 'Parenting', count: 15, icon: '👨‍👩‍👧‍👦' },
  { name: 'Success Story', count: 10, icon: '🏆' },
  { name: 'Event LWM', count: 8, icon: '📅' },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">LWM Blog</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Wawasan untuk Masa Depan <br/> yang Lebih Cerah
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Temukan artikel terbaru seputar tips belajar, informasi pendidikan, parenting, dan kabar terbaru dari LWM.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-orange rounded-full"></span>
              Artikel Unggulan
            </h2>

            <div className="grid gap-10">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row h-full md:h-64">
                  <div className="md:w-2/5 overflow-hidden relative h-48 md:h-full">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-orange">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-white border border-gray-200 text-gray-600 rounded-full font-bold hover:bg-gray-50 hover:text-brand-orange transition-colors shadow-sm">
                Muat Lebih Banyak
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Kategori Populer</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <a href="#" key={cat.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 group transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-brand-orange">{cat.name}</span>
                    </div>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full group-hover:bg-white group-hover:text-brand-orange">
                      {cat.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
               <h3 className="font-bold text-xl mb-2 relative z-10">Berlangganan Newsletter</h3>
               <p className="text-orange-100 text-sm mb-6 relative z-10">Dapatkan tips belajar dan info terbaru langsung di inbox kamu.</p>
               <input 
                  type="email" 
                  placeholder="Email kamu" 
                  className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
               />
               <button className="w-full bg-yellow-400 text-brand-orange font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
                  Daftar
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
