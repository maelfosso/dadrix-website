import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TermsContent } from '@/components/tos/content';

export default function TermsOfServicePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark relative flex w-full flex-col min-h-screen font-display overflow-x-hidden">
      <Header />
      <TermsContent />
      <Footer />
    </div>
  );
}
