import React from 'react';
import { TestimonyHero } from '../components/sections/TestimonyHero';
import { Testimony } from '../components/sections/Testimony';
import { TestimonyStory } from '../components/sections/TestimonyStory';
import { FAQ } from '../components/sections/FAQ';

export default function TestimonyPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <TestimonyHero />
        <Testimony />
        <TestimonyStory />
      </main>
    </div>
  );
}
