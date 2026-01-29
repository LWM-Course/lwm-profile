import React from 'react';
import Link from 'next/link';
import { getPostsByCategory } from '../../lib/hygraph';

const categoryTitles: Record<string, string> = {
  'tips-belajar': 'Tips Belajar',
  'info-ptn': 'Info PTN',
  'parenting': 'Parenting',
  'event': 'Event LWM',
  'success-story': 'Success Story'
};

export async function generateStaticParams() {
  return Object.keys(categoryTitles).map((category) => ({
    category,
  }));
}

export const revalidate = 60;

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const title = categoryTitles[category] || 'Artikel';
  
  // Use category slug directly for query
  const categorySlug = category;

  let posts: any[] = [];
  try {
    const data = await getPostsByCategory(categorySlug);
    posts = (data as any).blogPosts || [];
  } catch (error) {
    console.error(`Failed to fetch posts for category ${category}:`, error);
  }

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

      <div className="container mx-auto px-4 max-w-7xl mt-12">
        {posts.length === 0 ? (
           <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada artikel</h3>
             <p className="text-gray-500">Maaf, belum ada artikel untuk kategori ini.</p>
             <Link href="/blog" className="inline-block mt-6 text-brand-orange font-bold hover:underline">
               Kembali ke Semua Artikel
             </Link>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
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
                    {post.category?.name || title}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{new Date(post.publishedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>5 min baca</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                    <Link href={`/blog/read/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
                    <img 
                      src={(Array.isArray(post.author) ? post.author[0] : post.author)?.photo?.url || `https://api.dicebear.com/9.x/lorelei/svg?seed=${(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Admin'}`}
                      alt={(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Author'} 
                      className="w-8 h-8 rounded-full object-cover" 
                    />
                    <span className="text-sm font-medium text-gray-700">{(Array.isArray(post.author) ? post.author[0] : post.author)?.name || 'Admin'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
