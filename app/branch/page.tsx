import React from 'react';
import { BranchHero } from '../components/sections/BranchHero';
import { Pricing } from '../components/sections/Pricing';
import { BranchLocation } from '../components/sections/BranchLocation';
import { TopTeachers } from '../components/sections/TopTeachers';
import { FAQ } from '../components/sections/FAQ';

export default function BranchPage() {
  return (
    <div className="selection:bg-brand-orange selection:text-white bg-white min-h-screen">
      <main>
        <BranchHero />
        <Pricing />
        <BranchLocation />
        <TopTeachers />
        <FAQ />
      </main>
    </div>
  );
}
