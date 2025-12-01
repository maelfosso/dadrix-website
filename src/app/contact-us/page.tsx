'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';
import { useState } from 'react';
import { Link } from '@/i18n/routing';

export default function ContactUsPage() {
  const t = useTranslations('contact');
  const mounted = useMounted();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!mounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
            <h1 className="text-foreground text-4xl lg:text-5xl font-bold tracking-tighter">
              {t('title')}
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
              {t('subtitle')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl">{t('form.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      {t('form.name')}
                    </Label>
                    <Input
                      id="name"
                      placeholder={t('form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      {t('form.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      {t('form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t('form.messagePlaceholder')}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    {t('form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('info.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                        <span className="material-symbols-outlined text-primary dark:text-white">mail</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.email')}</p>
                        <Link href="mailto:contact@dadrix.com" className="font-medium text-foreground hover:text-primary transition-colors">
                          {t('info.emailValue')}
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                        <span className="material-symbols-outlined text-primary dark:text-white">call</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.phone')}</p>
                        <Link href="tel:+1234567890" className="font-medium text-foreground hover:text-primary transition-colors">
                          {t('info.phoneValue')}
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                        <span className="material-symbols-outlined text-primary dark:text-white">location_on</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.address')}</p>
                        <p className="font-medium text-foreground">{t('info.addressValue')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="rounded-xl border border-border overflow-hidden h-64 lg:h-auto lg:flex-grow">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_m25ekltJGq--iIoWA7kVyXnKcyfukOT-2w63RzAuwFzjy9MLbdRQOiCw9C4jTBBPHTFZF38G3sskEyl5j_S5rl_h7GmK61bQLpZjfUtkDL1CAdgBe0DaNIevzkMa9v0zJFXGPQaKNr4S4w4ANXnVO5MvVf0ePGtRglCiNE1Wp1l4bmYY5jNvvwuXpsd5u8kwGCgjYpW-_cKCO_Fg87Tb-5BOFWKLuFK8JLzSyJLk4_7L9-4DiJ9brO2LXkthOFmsIBIu7O5cb6vA")`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
