'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const testimonials = [
  { 
    id: 'alex',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoEfaKyl_nZL7Z3Y2Vd_p6msh1MqHwBlPgH6fUEg9GRGckTVNVtA6JFOl4JCz7dKKo3qKe_SqzhSPrn8Y2D51A7Xn_PiT5Arw_msNU4D1W0J0lD32mLshxtCQciffoMBKv1tjINoT18qyrIyCodzh0FNlQ7jJ9qV1RyQknOGfk1azfCKe0xkLAwjgis7KzXpR-x6wXG6L0z0faRGMWHvgjSKMGV7PioQLJUKrRkaZ6-jYbznJqanEOppig-UIw6qWshQeOjR-rt-Lu ",
  },
  { 
    id: 'samantha',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXWDDG7ymOENP95p9g6Esh6zvSz1krPG9CmITu3IXCdAXWUDe02WLtt4jqpGAjyApKnwAej7DzqVwkYN3EiQ0-NFwXXS4zvgMJTYED5qjssn0V4YnLbGqdkaCF_foeYyNVuKQWB_W9ms12nMLtzNBsOVQDLiqr_H6KWZPcT_e_3k8ztNEhGSjfmt8TqoktGjiVLmaMQK9JoTLmNuE_GaFFo_ZaYSY_7p9aKRNLq_ez7koGwHNqOlEsXFn5W5Kc4JraRjwg3IEM4Nd ",
  },
];

export function TestimonialsSection() {
  const t = useTranslations('about');

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url("${testimonial.image}")` }}
              />
              <div className="flex flex-col">
                <h3 className="font-bold">
                  {t(`testimonials.${testimonial.id}.name`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`testimonials.${testimonial.id}.role`)}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              {t(`testimonials.${testimonial.id}.content`)}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
