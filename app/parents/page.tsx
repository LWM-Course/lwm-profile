import React from 'react';
import { ParentsHero } from '../components/sections/ParentsHero';
import { ComparisonSection } from '../components/sections/ComparisonSection';
import { ParentsOffer } from '../components/sections/ParentsOffer';
import { ParentsStories } from '../components/sections/ParentsStories';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { FAQ } from '../components/sections/FAQ';

export default function ParentsPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <ParentsHero />
        <ComparisonSection />
        <BenefitsSection />
        <ParentsStories />
        <ParentsOffer />
      </main>
    </div>
  );
}
