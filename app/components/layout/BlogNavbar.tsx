'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    { name: 'Tips Belajar', href: '/blog/tips-belajar' },
    { name: 'Info PTN', href: '/blog/info-ptn' },
    { name: 'Parenting', href: '/blog/parenting' },
    { name: 'Event LWM', href: '/blog/event' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                LWM
              </div>
              <span className="font-bold text-xl text-gray-800">Blog</span>
            </Link>

            {/* Desktop Categories */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/blog" 
                className={`text-sm font-medium transition-colors ${
                  pathname === '/blog' ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'
                }`}
              >
                Terbaru
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === cat.href ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search & Back */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative">
              <input 
                type="text" 
                placeholder="Cari artikel..." 
                className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all w-48"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 hidden sm:block">
              Kembali ke LWM
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/blog" 
              className={`block text-sm font-medium ${pathname === '/blog' ? 'text-brand-orange' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Terbaru
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`block text-sm font-medium ${pathname === cat.href ? 'text-brand-orange' : 'text-gray-600'}`}
                onClick={() => setIsOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
               <Link href="/" className="block text-sm text-gray-500 py-2">
                 Kembali ke Website Utama
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
