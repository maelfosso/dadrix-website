import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/service-section';
import WorkSection from '@/components/home/products-section';

export const metadata: Metadata = {
  title: 'DaDriX - Data Driven Xolutions',
  description: 'Transform your data into competitive advantage with AI and analytics',
  openGraph: {
    title: 'DaDriX',
    description: 'Data solutions for modern businesses',
    type: 'website',
    locale: 'en_US',
  },
};

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col font-display">
      <Header />
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-grow">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}
