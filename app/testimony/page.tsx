import React from 'react';
import { TestimonyHero } from '../components/sections/TestimonyHero';
import { Testimony } from '../components/sections/Testimony';
import { TestimonyStory } from '../components/sections/TestimonyStory';
import { FAQ } from '../components/sections/FAQ';
import { getTestimonials, getFAQs } from '../lib/hygraph';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function TestimonyPage() {
  const [testimonialsData, faqsData] = await Promise.all([
    getTestimonials().catch(() => null),
    getFAQs().catch(() => null)
  ]);

  const testimonials = (testimonialsData as any)?.testimonials;
  const faqs = (faqsData as any)?.faqs;

  return (
    <div className="bg-white min-h-screen">
      <main>
        <TestimonyHero />
        <Testimony data={{ testimonials }} />
        <TestimonyStory />
        {/* FAQ might be useful here too, but user didn't explicitly ask. 
            However, typically testimony pages might have FAQs. 
            I'll stick to what was there but enable data passing if components support it. 
            TestimonyStory is static. 
        */}
      </main>
    </div>
  );
}
