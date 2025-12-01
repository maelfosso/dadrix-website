import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  let locale = request.cookies.get('NEXT_LOCALE')?.value;
  if (!locale) {
    locale = routing.defaultLocale;
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    });
  }

  response.headers.set('x-next-intl-locale', locale);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
  ],
};
