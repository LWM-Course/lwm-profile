'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Hide Navbar on blog pages
  if (pathname?.startsWith('/blog')) return null;

  const navLinks = [
    { 
      name: 'Pilih Jenjang', 
      href: '#',
      dropdown: [
        { name: 'Sekolah Dasar (SD)', href: '/program/sd' },
        { name: 'SMP', href: '/program/smp' },
        { name: 'SMA', href: '/program/sma' },
      ]
    },
    { name: 'Pilih Program', href: '#program' },
    { name: 'Branch', href: '/branch' },
    { name: 'Testimony', href: '/testimony' },
    { name: 'Untuk Orang Tua', href: '/parents' },
    { name: 'Blog', href: '/blog' },
    { name: 'Promo', href: '#promo' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
              LWM
            </div>
            <span className="font-bold text-2xl text-brand-orange">LWM</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="text-gray-600 hover:text-brand-orange font-medium transition-colors flex items-center gap-1">
                      {link.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-brand-orange font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="primary" size="md">
              Coba Kelas Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600"
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

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-800 font-bold px-2">{link.name}</span>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100 ml-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-brand-orange font-medium py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-orange font-medium px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-2 mt-4">
                <Button variant="primary" size="md" fullWidth>
                  Coba Kelas Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
