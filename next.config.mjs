/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Supprimez 'mdx'
  output: 'standalone',
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
