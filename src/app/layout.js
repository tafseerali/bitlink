import { ColorSchemeScript } from '@mantine/core';
import { Providers } from './providers';
import '@mantine/core/styles.css';
import LayoutWrapper from './components/LayoutWrapper';

import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';


export const metadata = {
  title: 'BitLink – Free URL Shortener',
  description: 'Shorten, share, and manage your URLs easily with BitLink. Fast, free, and simple URL shortening tool.',
  keywords: ['URL shortener', 'BitLink', 'short links', 'custom short URLs', 'free link shortener'],
  openGraph: {
    title: 'BitLink – Free URL Shortener',
    description: 'Create and share short links in seconds with BitLink.',
    icons: {
      icon: "/logo.ico",
      shortcut: "/logo.ico",
      apple: "/logo.ico",
    },
    url: 'https://bitlinkshortner.vercel.app/',
    siteName: 'BitLink',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BitLink – URL Shortener',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitLink – Free URL Shortener',
    description: 'Shorten and share links quickly with BitLink.',
    images: ['/logo.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        {/* Ensure Providers is a client component */}
        <Providers>
          <Notifications position="top-right" zIndex={2077} />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
