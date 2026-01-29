import React from 'react';
import { BlogNavbar } from '../components/layout/BlogNavbar';
import { getCategories } from '../lib/hygraph';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let categories = [];
  try {
    const data = await getCategories();
    categories = (data as any).categories || [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogNavbar categories={categories} />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LWM Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
