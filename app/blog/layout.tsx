import React from 'react';
import { BlogNavbar } from '../components/layout/BlogNavbar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogNavbar />
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
