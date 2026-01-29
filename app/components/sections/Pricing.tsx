'use client';

import React, { useState, useMemo } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

// Default data as fallback
const defaultPricingData = {
  SD: [
    { name: 'Basic', price: 'Rp 300.000', period: '/bulan', features: ['2x Seminggu', 'Matematika & IPA', 'Modul Digital', 'Max 10 Siswa'] },
    { name: 'Pro', price: 'Rp 500.000', period: '/bulan', features: ['3x Seminggu', 'Semua Mata Pelajaran', 'Modul Cetak', 'Max 8 Siswa', 'Konsultasi PR'] },
    { name: 'Elite', price: 'Rp 800.000', period: '/bulan', features: ['4x Seminggu', 'Semua Mata Pelajaran', 'Modul Premium', 'Max 5 Siswa', 'Private Session 1x', 'Konsultasi PR 24/7'] },
  ],
  SMP: [
    { name: 'Basic', price: 'Rp 400.000', period: '/bulan', features: ['2x Seminggu', 'Matematika & IPA', 'Modul Digital', 'Max 10 Siswa'] },
    { name: 'Pro', price: 'Rp 650.000', period: '/bulan', features: ['3x Seminggu', 'Semua Mata Pelajaran', 'Modul Cetak', 'Max 8 Siswa', 'Konsultasi PR'] },
    { name: 'Elite', price: 'Rp 1.000.000', period: '/bulan', features: ['4x Seminggu', 'Semua Mata Pelajaran', 'Modul Premium', 'Max 5 Siswa', 'Private Session 1x', 'Konsultasi PR 24/7'] },
  ],
  SMA: [
    { name: 'Basic', price: 'Rp 500.000', period: '/bulan', features: ['2x Seminggu', 'Saintek/Soshum', 'Modul Digital', 'Max 10 Siswa'] },
    { name: 'Pro', price: 'Rp 800.000', period: '/bulan', features: ['3x Seminggu', 'Saintek/Soshum', 'Modul Cetak', 'Max 8 Siswa', 'Tryout UTBK'] },
    { name: 'Elite', price: 'Rp 1.200.000', period: '/bulan', features: ['4x Seminggu', 'Saintek/Soshum', 'Modul Premium', 'Max 5 Siswa', 'Private Session', 'Tryout UTBK Rutin'] },
  ],
};

interface Plan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  category?: string;
  isPopular?: boolean;
}

interface PricingProps {
  initialJenjang?: string;
  hideTabs?: boolean;
  plans?: Plan[];
}

export const Pricing: React.FC<PricingProps> = ({ initialJenjang = 'SD', hideTabs = false, plans }) => {
  const [activeTab, setActiveTab] = useState<string>(initialJenjang);

  const pricingData = useMemo(() => {
    if (!plans || plans.length === 0) return defaultPricingData;

    // Group plans by category
    const grouped: Record<string, Plan[]> = {};
    plans.forEach(plan => {
      const category = plan.category || 'Other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(plan);
    });

    return grouped;
  }, [plans]);

  const availableCategories = Object.keys(pricingData);

  // Ensure activeTab is valid
  const currentTab = availableCategories.includes(activeTab) ? activeTab : availableCategories[0];

  return (
    <Section id="jenjang" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pilih Jenjang & Paket Belajar</h2>
        <p className="text-gray-600">Sesuaikan dengan kebutuhan pendidikan buah hati Anda dengan harga yang terjangkau.</p>
      </div>

      {/* Tab Navigation */}
      {!hideTabs && availableCategories.length > 0 && (
        <div className="flex justify-center mb-16">
          <div className="bg-orange-50 p-1.5 rounded-full inline-flex shadow-inner flex-wrap justify-center">
            {availableCategories.map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                  currentTab === level
                    ? 'bg-white text-brand-orange shadow-md transform scale-105'
                    : 'text-gray-500 hover:text-brand-orange hover:bg-white/50'
                }`}
              >
                Jenjang {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      {currentTab && pricingData[currentTab] && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData[currentTab].map((plan, index) => (
            <Card 
              key={`${currentTab}-${index}`} 
              overflow="visible"
              className={`relative h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2 ${plan.isPopular ? 'border-brand-yellow z-10' : 'border-transparent hover:border-orange-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-orange">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period || '/bulan'}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={plan.isPopular ? 'primary' : 'outline'} fullWidth>
                Pilih Paket
              </Button>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};
