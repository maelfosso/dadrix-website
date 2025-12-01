'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setLocale(locale: string, currentPath: string) {
  (await cookies()).set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });

  redirect(currentPath);
}