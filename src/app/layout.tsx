import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AnimationProvider } from '@/components/animations/AnimationProvider';
import { PageTransition } from '@/components/layout/PageTransition';import { PAGE_METADATA } from '@/data/metadata';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const rootMeta = PAGE_METADATA['/'];

export const metadata: Metadata = {
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
        ['--body-font' as string]: `${inter.style.fontFamily}, Inter, sans-serif`,
        ['--heading-font' as string]: `${cormorant.style.fontFamily}, 'Cormorant Garamond', Georgia, serif`,
      }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnimationProvider>{children}</AnimationProvider>
        <PageTransition />
      </body>
    </html>
  );
}
