'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  // Hide Footer on blog pages
  if (pathname?.startsWith('/blog')) return null;

  return (
    <footer className="bg-brand-orange-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <span className="font-bold text-2xl text-brand-orange">LWM</span>
              </Link>
            <p className="text-gray-600 mb-4">
              Membangun masa depan cerah dengan pendidikan yang menyenangkan dan berkualitas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Program</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:text-brand-orange">Sekolah Dasar (SD)</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Sekolah Menengah Pertama (SMP)</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Sekolah Menengah Atas (SMA)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Tentang Kami</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:text-brand-orange">Branch</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Testimony</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Blog</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Karir</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Kontak</h3>
            <ul className="space-y-2 text-gray-600">
              <li>info@lwm.com</li>
              <li>+62 812 3456 7890</li>
              <li>Jl. Pendidikan No. 123, Jakarta</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-200 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LWM (Learning With Miss Melati). All rights reserved.
        </div>
      </div>
    </footer>
  );
};
