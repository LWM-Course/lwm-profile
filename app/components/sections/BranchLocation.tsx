'use client';

import React, { useState, useMemo } from 'react';
import { Section } from '../ui/Section';

// Branch Data Type
type Branch = {
  id: string;
  name: string;
  address: string;
  region: string;
  mapUrl: string;
  image: string;
};

// Dummy Data
const branches: Branch[] = [
  {
    id: '1',
    name: 'Bekasi - Cibubur',
    address: 'Jl. Alternatif Cibubur Kav 5 & 6, Jatisampurna, Bekasi',
    region: 'Jabodetabek',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.544799893769!2d106.9135893153703!3d-6.323351995423854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992d116260195%3A0x633f88647582531e!2sCibubur!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-blue-100',
  },
  {
    id: '2',
    name: 'Tangerang - Citymall',
    address: 'Ruko Business Park Tangcity Blok A No.16, Cikokol, Kota Tangerang',
    region: 'Jabodetabek',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3686730704943!2d106.63188931536928!3d-6.214999995499259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f93369101907%3A0x333917631336127!2sTangerang!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-green-100',
  },
  {
    id: '3',
    name: 'Bogor - Permata',
    address: 'Kompleks Ruko Permata, Jl Raya Soleh Iskandar No.4, Tanah Sereal, Kota Bogor',
    region: 'Jabodetabek',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.456789012345!2d106.7890123456789!3d-6.567890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnMDQuNCJTIDEwNsKwNDcnMjAuNCJF!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-yellow-100',
  },
  {
    id: '4',
    name: 'Bandung - Dago',
    address: 'Jl. Ir. H. Juanda No.123, Dago, Kecamatan Coblong, Kota Bandung',
    region: 'Jawa',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.987654321098!2d107.6123456789012!3d-6.901234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDQuNCJTIDEwN8KwMzYnNDQuNCJF!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-red-100',
  },
  {
    id: '5',
    name: 'Surabaya - Gubeng',
    address: 'Jl. Raya Gubeng No.45, Gubeng, Kota Surabaya, Jawa Timur',
    region: 'Jawa',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.123456789012!2d112.7567890123456!3d-7.267890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnMDQuNCJTIDExMsKwNDUnMjQuNCJF!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-orange-100',
  },
  {
    id: '6',
    name: 'Medan - Polonia',
    address: 'Jl. Polonia No.10, Polonia, Medan, Sumatera Utara',
    region: 'Sumatra',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.123456789012!2d98.67890123456789!3d3.567890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzQnMDQuNCJOIDk4wrA0MCc0NC40IkU!5e0!3m2!1sen!2sid!4v1629858385310',
    image: 'bg-purple-100',
  },
];

const regions = ['Semua', 'Jabodetabek', 'Jawa', 'Sumatra', 'Bali & Nusa Tenggara', 'Kalimantan', 'Sulawesi', 'Maluku & Papua'];

export const BranchLocation = () => {
  const [activeRegion, setActiveRegion] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  // Filter Branches Logic
  const filteredBranches = useMemo(() => {
    return branches.filter((branch) => {
      const matchesRegion = activeRegion === 'Semua' || branch.region === activeRegion;
      const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            branch.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, searchQuery]);

  // Update selected branch when list changes if current selection is not in list (optional, but good UX)
  // For now, we just let the user click.

  return (
    <Section id="location" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Temukan LWM Center terdekat di kotamu
          </h2>

          {/* Region Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeRegion === region
                    ? 'bg-teal-500 text-white border-teal-500 shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-teal-500 hover:text-teal-500'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px] lg:h-[500px]">
          {/* Branch List Column */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari lokasi cabang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Scrollable List */}
            <div className="overflow-y-auto flex-1 p-2 space-y-2 custom-scrollbar">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch) => (
                  <div
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-200 flex gap-4 items-start ${
                      selectedBranch.id === branch.id
                        ? 'bg-teal-50 border-teal-200 shadow-sm ring-1 ring-teal-200'
                        : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className={`w-16 h-16 rounded-lg ${branch.image} flex-shrink-0 bg-cover bg-center`} />
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-sm mb-1 ${selectedBranch.id === branch.id ? 'text-teal-700' : 'text-gray-900'}`}>
                        {branch.name}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {branch.address}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-400 text-sm">
                  Tidak ada cabang ditemukan
                </div>
              )}
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
             <iframe 
                key={selectedBranch.id} // Force re-render on branch change
                src={selectedBranch.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="w-full h-full"
             ></iframe>
             
             {/* Overlay Info Card (Optional) */}
             <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg max-w-xs animate-fade-in hidden md:block">
                <h3 className="font-bold text-gray-900 mb-1">{selectedBranch.name}</h3>
                <p className="text-xs text-gray-600 mb-3">{selectedBranch.address}</p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedBranch.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 text-xs font-bold hover:underline flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Lihat peta lebih besar
                </a>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
