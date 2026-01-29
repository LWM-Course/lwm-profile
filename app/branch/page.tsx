import React from 'react';
import { BranchHero } from '../components/sections/BranchHero';
import { Pricing } from '../components/sections/Pricing';
import { BranchLocation } from '../components/sections/BranchLocation';
import { TopTeachers } from '../components/sections/TopTeachers';
import { FAQ } from '../components/sections/FAQ';
import { getPricing, getFAQs } from '../lib/hygraph';

export const revalidate = 60;

export default async function BranchPage() {
  let plans = [];
  let faqs = [];
  try {
    const [pricingData, faqsData] = await Promise.all([
      getPricing(),
      getFAQs()
    ]);
    const rawPlans = (pricingData as any)?.pricingPlans || [];
    plans = rawPlans.map((plan: any) => ({
      ...plan,
      category: plan.level?.name || 'Reguler',
    }));
    faqs = (faqsData as any)?.faqs || [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const markers = [
    { x: 29.0, y: 83.0, color: '#ef4444', size: 18, label: 'Jakarta' },
    { x: 30.5, y: 87.0, color: '#ef4444', size: 16, label: 'Bandung' },
    { x: 41.5, y: 89.0, color: '#ef4444', size: 16, label: 'Surabaya' },
  ];
  return (
    <div className="selection:bg-brand-orange selection:text-white bg-white min-h-screen">
      <main>
        <BranchHero markers={markers} />
        <Pricing plans={plans} />
        <BranchLocation />
        <TopTeachers />
        <FAQ data={{ faqs }} />
      </main>
    </div>
  );
}
