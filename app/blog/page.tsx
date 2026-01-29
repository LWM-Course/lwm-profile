import React from 'react';
import Link from 'next/link';
import { getPosts } from '../lib/hygraph';

const categoryIcons: Record<string, string> = {
  'Tips Belajar': '📚',
  'Info PTN': '🎓',
  'Parenting': '👨‍👩‍👧‍👦',
  'Success Story': '🏆',
  'Event LWM': '📅',
};

export const revalidate = 60;

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    const data = await getPosts();
    posts = (data as any).blogPosts || [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  // Calculate category counts dynamically
  const categoryCounts = posts.reduce((acc: Record<string, number>, post: any) => {
    const catName = post.category?.name;
    const catSlug = post.category?.slug;
    
    if (catName && catSlug) {
      if (!acc[catName]) {
        acc[catName] = 0;
      }
      acc[catName]++;
    }
    return acc;
  }, {});

  // Convert to array and sort by count (descending)
  const categories = Object.entries(categoryCounts).map(([name, count]) => {
     // Find icon or default to folder icon
     const icon = categoryIcons[name] || '📂';
     // Find slug from first post with this category (simple approach)
     const samplePost = posts.find(p => p.category?.name === name);
     const slug = samplePost?.category?.slug || '#';
     
     return { name, count, icon, slug };
  }).sort((a: any, b: any) => b.count - a.count);

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
              Artikel Terbaru
            </h2>

            {posts.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <p className="text-gray-500">Belum ada artikel yang diterbitkan.</p>
              </div>
            ) : (
              <div className="grid gap-10">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row h-full md:h-64">
                    <div className="md:w-2/5 overflow-hidden relative h-48 md:h-full">
                      {(post.thumbnail?.url || post.coverImage?.url) ? (
                        <img 
                          src={post.thumbnail?.url || post.coverImage?.url} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-orange">
                        {post.category?.name || 'Umum'}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span>{new Date(post.publishedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span>•</span>
                        <span>5 min baca</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                        <Link href={`/blog/read/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-auto">
                        <img 
                          src={(Array.isArray(post.author) ? post.author[0] : post.author)?.photo?.url || `https://api.dicebear.com/9.x/lorelei/svg?seed=${(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Admin'}`}
                          alt={(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Admin'} 
                          className="w-6 h-6 rounded-full object-cover" 
                        />
                        <span className="text-sm font-medium text-gray-700">{(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Admin'}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Categories Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori Populer</h3>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link href={`/blog/${cat.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 group transition-colors">
                      <span className="flex items-center gap-3 text-gray-700 group-hover:text-brand-orange font-medium">
                        <span className="text-xl">{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
