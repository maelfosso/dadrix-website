import type { Metadata } from 'next';
import { Space_Grotesk, Poppins } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { cookies, headers } from 'next/headers';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DaDriX - Data Driven Xolutions',
  description: 'Transform your data into competitive advantage',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const locale = (await headers()).get('x-next-intl-locale') || 'en';
  const locale = (await cookies()).get('NEXT_LOCALE')?.value || 'en';
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
