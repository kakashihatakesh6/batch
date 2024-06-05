// app/page.tsx
import fs from 'fs';
import path from 'path';
import Data from '../types/types'; // Ensure this path is correct

// Components imports
import Testimonial from "@/components/SectionTestimonial";
import Advantages from "@/components/SectionAdvantages";
import Hero from '@/components/SectionHero';
import Slide from '@/components/SectionSlide';
import Features from '@/components/SectionFeatures';
import Faq from '@/components/SectionFaq';
import Footer from '@/components/SectionFooter';

// Server-side function to fetch data
async function fetchData(): Promise<Data> {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data: Data = JSON.parse(jsonData);
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="overflow-x-hidden md:mx-[46px]">

      <Slide delay={0.04}>
        <Hero {...data.hero} />
      </Slide>
      <Slide delay={0.04}>
        <Features {...data.features} />
      </Slide>
      <Advantages  {...data.Advantages} />
      <Slide delay={0.34}>
        <Testimonial {...data.testimonials} />
      </Slide>
      <Slide delay={0.34}>
        <Faq faqItems={data.FAQ} />
      </Slide>
      <Slide delay={0.14}>
        <Footer />
      </Slide>

    </div>
  );
}
