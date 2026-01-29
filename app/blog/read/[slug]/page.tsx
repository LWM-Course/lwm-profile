import React from 'react';
import Link from 'next/link';
import { getPostBySlug } from '../../../lib/hygraph';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const data: any = await getPostBySlug(slug);
    const post = data?.blogPost;
    
    if (!post) {
      return {
        title: 'Artikel Tidak Ditemukan',
      };
    }

    return {
      title: `${post.title} | LWM Blog`,
      description: post.excerpt,
      openGraph: {
        images: post.bannerImage?.url ? [post.bannerImage.url] : (post.coverImage?.url ? [post.coverImage.url] : []),
      },
    };
  } catch (error) {
    return {
      title: 'Blog | LWM',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post: any = null;

  try {
    const data: any = await getPostBySlug(slug);
    post = data?.blogPost;
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    notFound();
  }

  const author = Array.isArray(post.author) ? post.author[0] : post.author;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero / Header */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {(post.bannerImage?.url || post.coverImage?.url) ? (
           <img
             src={post.bannerImage?.url || post.coverImage?.url}
             alt={post.title}
             className="w-full h-full object-cover"
           />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-20">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center gap-4 mb-4 text-sm md:text-base font-medium">
                <span className="bg-brand-orange px-3 py-1 rounded-full">{post.category?.name || 'Artikel'}</span>
                <span>{new Date(post.publishedDate).toLocaleDateString('id-ID', { dateStyle: 'long' })}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-3">
                <img 
                  src={author?.photo?.url || `https://api.dicebear.com/9.x/lorelei/svg?seed=${author?.name || 'Admin'}`} 
                  alt={author?.name || 'Admin'} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{author?.name || 'Admin'}</span>
                  <span className="text-white/80 text-sm">Penulis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-orange">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-orange">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
          </div>

          <article 
            className="prose prose-lg prose-orange max-w-none 
              [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-gray-700
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-gray-700
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-gray-700
              [&_li]:mb-2
              [&_blockquote]:border-l-4 [&_blockquote]:border-brand-orange [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-8
              [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-8 [&_img]:w-full
              [&_a]:text-brand-orange [&_a]:underline [&_a]:font-medium hover:[&_a]:text-brand-orange-dark"
            dangerouslySetInnerHTML={{ __html: post.content?.html || '' }}
          />

          {/* Share & Tags could go here */}
          <div className="mt-12 pt-8 border-t border-gray-100">
             <Link href="/blog" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
               Kembali ke Blog
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
