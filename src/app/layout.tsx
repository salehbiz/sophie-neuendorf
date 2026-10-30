import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { AnimationProvider } from '@/components/animations/AnimationProvider';
import { PAGE_METADATA } from '@/data/metadata';

// Avenir Next (Monotype), self-hosted: the only typeface on the site (Light for display, Regular for
// text, Medium for emphasis), as on Neuendorf House.
const avenir = localFont({
  src: [
    { path: '../fonts/avenir-next-light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/avenir-next-regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/avenir-next-medium.woff2', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

const rootMeta = PAGE_METADATA['/'];

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.neuendorfteba.com'),
  title: rootMeta.title,
  description: rootMeta.description,
  openGraph: {
    title: rootMeta.title,
    description: rootMeta.description,
    images: [rootMeta.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: rootMeta.title,
    description: rootMeta.description,
    images: [rootMeta.ogImage],
  },
  icons: {
    icon: [
      { url: '/assets/sophie/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/sophie/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/sophie/icons/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/sophie/icons/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/sophie/icons/favicon-180.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="ui-mod-js ui-mod-ix3"
      style={{
        ['--body-font' as string]: `${avenir.style.fontFamily}, 'Avenir Next', 'Helvetica Neue', Arial, sans-serif`,
        ['--heading-font' as string]: `${avenir.style.fontFamily}, 'Avenir Next', 'Helvetica Neue', Arial, sans-serif`,
      }}
      suppressHydrationWarning
    >
      {/* Fonts are self-hosted by next/font: no requests to Google, so no visitor IPs go to Google (GDPR). */}
      <body className={avenir.className} suppressHydrationWarning>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
