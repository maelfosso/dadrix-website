import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServicesHeroSection } from '@/components/services/hero-section';
import { ServicesGrid } from '@/components/services/services-grid';
import { ServicesCTASection } from '@/components/services/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - DaDriX',
  description: 'End-to-end data solutions for smarter decisions',
};

export default function OurServicesPage() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden min-h-screen">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <ServicesHeroSection />
        <ServicesGrid />
        <ServicesCTASection />
      </main>

      <Footer />
    </div>
  );
}
