import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PrivacyContent } from '@/components/privacy-policy/content';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark relative flex w-full flex-col min-h-screen font-display overflow-x-hidden">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}
