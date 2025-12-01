'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const teamMembers = [
  { id: 'jane', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbPjVZ2IXVnqoaAUkQYIFLCI1-ppgPHjT9xR1WX3nGm9Y204BMssJ7PjcanMbycKIsa_d_wfaYEegVPWoYAf31SdTaY_uqs7EEyiIVqSTK6MDd2J4bp9RJDMro2ZQSOCqt_0FVaGdh0inOKeQaCsrTD2X4Evau1uF0EFx4LGcj2gAAghHaKz-zX4eun29abicQ-e3Y_IXBeZHO-C3co3zl6NNi1gDF_2NwmtfrUW2witSVru9EHy_5jVPqoMXThwg5mEL3vP4tiQY3 " },
  { id: 'john', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6dHG2uYgZ270ndrM4X4N4TnSWWXG8dTJyYqK4H5zQ4UVyEmQvBrepWQvqBbZmSkhH-bFhBkHpdacr_Ok42PrPHYAbd414KFPkwaKfURJp5sgq8PGf3BeySXE_lL6Bz95mgjZ8x6TNjWzbmBXqQQ0AAP_ewm11rRDnfpGyGaSkSTG3pygXUFcKSJO1DEEuxAcjazjofFV3LD9ZjG8N9cUZj0hOWB44zVL_9ri99A53SMEyyFfWsHRfbOsBU3Mxgy3272bqeFGbzJGe " },
  { id: 'emily', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxg0Fg9KXONZLR2hjYUMQMoIM1q0lIZtjvjj0Wjzvqy_TpCF6RhjXB19kIDMUxMD1vJMbGVrb51-dsg_NjK51TeU3sFfGbNCpNNFy7vZKcEGw7wTVqICeolQrHui_HgpctjylZm2xuYUrAmbPrmj_F1GFbT-gu0CSGEo5EUYwmUvJ5nqmj3JzhZ4WB6QIScZaYw2TS49oC-voWfR2owf8sQpcwvwVg2ByuTUFusko7HCPs0MY_o_XqwbXoGHQ_TGn9EDLfiPg8a_SQ " },
];

export function TeamSection() {
  const t = useTranslations('about');

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('team.title')}
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
          {t('testimonials.title')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="flex flex-col items-center text-center p-6">
            <div
              className="w-32 h-32 rounded-full bg-cover bg-center mb-4 ring-4 ring-primary/10"
              style={{ backgroundImage: `url("${member.image}")` }}
            />
            <h3 className="text-lg font-bold">
              {t(`team.${member.id}.name`)}
            </h3>
            <p className="text-primary dark:text-primary/80 text-sm">
              {t(`team.${member.id}.role`)}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
