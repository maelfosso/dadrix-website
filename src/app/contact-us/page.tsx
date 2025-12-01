import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { ContactHeroSection } from '@/components/contact-us/hero-section';
import { ContactForm } from '@/components/contact-us/contact-form';
import { ContactInfo } from '@/components/contact-us/contact-info';
import { ContactMap } from '@/components/contact-us/contact-map';

export const metadata: Metadata = {
  title: 'Contact Us - DaDriX',
  description: 'Get in touch with our data experts',
};

export default function ContactUsPage() {
  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <div className="p-4 lg:p-8">
          <ContactHeroSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <span className="text-foreground">Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
