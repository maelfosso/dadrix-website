import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';
import { AboutHeroSection } from '@/components/about-us/hero-section';
import { MissionVisionSection } from '@/components/about-us/mission-vision';
import { ValuesSection } from '@/components/about-us/values';
import { TimelineSection } from '@/components/about-us/timeline';
import { TeamSection } from '@/components/about-us/team';
import { TestimonialsSection } from '@/components/about-us/testimonials';
import { AboutMobileMenu } from '@/components/about-us/mobile-menu';

export const metadata: Metadata = {
  title: 'About Us - DaDriX',
  description: 'Meet the team transforming data into business value',
};

export default function AboutUsPage() {
  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <AboutHeroSection />
        <MissionVisionSection />
        <ValuesSection />
        <TimelineSection />
        <TeamSection />
        <TestimonialsSection />
        <AboutMobileMenu />
      </main>

      <Footer />
    </div>
  );
}
