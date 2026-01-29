import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Location } from "./components/sections/Location";
import { Gallery } from "./components/sections/Gallery";
import { Facility } from "./components/sections/Facility";
import { Testimony } from "./components/sections/Testimony";
import { FAQ } from "./components/sections/FAQ";
import { getPageHome, getPricing, getTestimonials, getFacilities, getGalleries, getFAQs } from "./lib/hygraph";

// Helper to safely fetch data
async function fetchData() {
  try {
    const [pageHomeData, pricingData, testimonialData, facilitiesData, galleriesData, faqsData] = await Promise.all([
      getPageHome().catch(() => null),
      getPricing().catch(() => null),
      getTestimonials().catch(() => null),
      getFacilities().catch(() => null),
      getGalleries().catch(() => null),
      getFAQs().catch(() => null),
    ]);

    const pageHome = (pageHomeData as any)?.pageHomes?.[0];
    const rawPlans = (pricingData as any)?.pricingPlans || [];

    // Map PageHome data to Hero props
    const hero = pageHome ? {
      badge: pageHome.heroBadge,
      headline: pageHome.heroTitle,
      subheadline: pageHome.heroQuote,
      description: pageHome.heroDescription,
      ctaPrimaryText: pageHome.heroCtaPrimary,
      ctaPrimaryLink: '#', // Default or add field if available
      ctaSecondaryText: pageHome.heroCtaSecondary,
      ctaSecondaryLink: '#', // Default
      image: pageHome.heroImage,
    } : null;

    // Map PageHome data to Location props
    const location = pageHome ? {
      name: pageHome.locationTitle,
      description: pageHome.locationDescription,
      googleMapsEmbedUrl: pageHome.locationMapUrl,
      email: pageHome.contactEmail,
      phone: pageHome.contactPhone,
      address: pageHome.contactAddress,
    } : null;

    // Map PricingPlans (level -> category)
    const plans = rawPlans.map((plan: any) => ({
      ...plan,
      category: plan.level?.name || 'Reguler', // Fallback
    }));

    return {
      hero,
      plans,
      location,
      testimonials: (testimonialData as any)?.testimonials,
      facilities: (facilitiesData as any)?.facilities,
      galleryImages: (galleriesData as any)?.galleryImages,
      faqs: (faqsData as any)?.faqs,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { hero: null, plans: null, location: null, testimonials: null, facilities: null, galleryImages: null, faqs: null };
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const { hero, plans, location, testimonials, facilities, galleryImages, faqs } = await fetchData();

  return (
    <div className="flex flex-col gap-0">
      <Hero data={hero} />
      <Pricing plans={plans} />
      <Location data={location} />
      <Gallery data={{ galleryImages }} />
      <Facility data={{ facilities }} />
      <Testimony data={{ testimonials }} />
      <FAQ data={{ faqs }} /> 
    </div>
  );
}
