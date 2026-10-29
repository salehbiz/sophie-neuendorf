import type { Metadata } from 'next';
import '@/styles/globals.css';
import { buildPageMetadata } from '@/data/metadata';
import { AnimationProvider } from '@/components/animations/AnimationProvider';

export const metadata: Metadata = buildPageMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ui-mod-js ui-mod-ix3" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Droid+Sans:wght@400;700&family=Geist:wght@400;500;600&family=Inter:wght@400;500;600&family=Inter+Tight:wght@400;500;600;700&family=Space+Grotesk:wght@400&display=swap"
        />
        <link rel="shortcut icon" href="/assets/images/site-icon-dark-039a29.jpg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/assets/images/site-icon-dark-9e7f02.jpg" />
      </head>
      <body suppressHydrationWarning>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
