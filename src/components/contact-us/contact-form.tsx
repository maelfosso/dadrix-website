'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
  );
}
