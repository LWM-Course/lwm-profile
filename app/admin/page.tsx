import React from 'react';
import { Button } from '../components/ui/Button';

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto text-brand-orange">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">CMS Admin Panel</h1>
          <p className="text-gray-600">
            Website ini menggunakan Hygraph (Headless CMS) untuk pengelolaan konten.
          </p>
        </div>

        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm text-left">
          <p className="font-semibold mb-1">Cara Mengedit Konten:</p>
          <ol className="list-decimal pl-4 space-y-1">
            <li>Klik tombol di bawah untuk membuka Hygraph.</li>
            <li>Login ke akun Hygraph Anda.</li>
            <li>Pilih project <strong>LWM Profile</strong>.</li>
            <li>Edit konten pada menu <strong>Content</strong>.</li>
          </ol>
        </div>

        <Button 
          as="a" 
          href="https://app.hygraph.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"
        >
          Buka Hygraph Dashboard
        </Button>
        
        <p className="text-xs text-gray-400 mt-4">
          Pastikan Anda telah diundang sebagai editor di project Hygraph.
        </p>
      </div>
    </div>
  );
}
