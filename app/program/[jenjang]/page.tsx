
import React from 'react';
import { notFound } from 'next/navigation';
import { FullWidthHero } from '../../components/sections/FullWidthHero';
import { FeatureCarousel } from '../../components/sections/FeatureCarousel';
import { Pricing } from '../../components/sections/Pricing';
import { Location } from '../../components/sections/Location';
import { Testimony } from '../../components/sections/Testimony';
import { FAQ } from '../../components/sections/FAQ';
import { jenjangData } from '../../lib/jenjangData';

// Generate static params for all supported jenjang
export function generateStaticParams() {
  return [
    { jenjang: 'sd' },
    { jenjang: 'smp' },
    { jenjang: 'sma' },
  ];
}

interface PageProps {
  params: Promise<{ jenjang: string }>;
}

export default async function JenjangPage({ params }: PageProps) {
  const { jenjang } = await params;
  
  const data = jenjangData[jenjang as keyof typeof jenjangData];

  if (!data) {
    notFound();
  }

  // Map jenjang key to Pricing component key (uppercase)
  const pricingKey = jenjang.toUpperCase() as 'SD' | 'SMP' | 'SMA';

  return (
    <div className="selection:bg-brand-orange selection:text-white">
      
      <FullWidthHero 
        title={data.title}
        quote={data.quote}
        description={data.description}
        imageClass={data.heroImage}
      />

      <FeatureCarousel features={data.features} />

      <Pricing initialJenjang={pricingKey} hideTabs={true} />

      <Location />
      
      <Testimony />

      <FAQ />

    </div>
  );
}
