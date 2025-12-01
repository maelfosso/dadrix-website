import { cookies } from 'next/headers';
import {getRequestConfig} from 'next-intl/server';
import { routing } from './routing';
 
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');

  let locale;
  if (localeCookie && ['fr', 'en'].includes(localeCookie.value)) {
    locale = localeCookie.value;
  } else {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;
 
  return {
    locale,
    messages
  };
});
