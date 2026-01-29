import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Location } from "./components/sections/Location";
import { Gallery } from "./components/sections/Gallery";
import { Facility } from "./components/sections/Facility";
import { Testimony } from "./components/sections/Testimony";
import { FAQ } from "./components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Pricing />
      <Location />
      <Gallery />
      <Facility />
      <Testimony />
      <FAQ />
    </div>
  );
}
