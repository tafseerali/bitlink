import { ColorSchemeScript } from '@mantine/core';
import { Providers } from './providers';
import '@mantine/core/styles.css';
import LayoutWrapper from './components/LayoutWrapper';

import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';



export const metadata = {
  title: 'My Mantine App',
  description: 'Mantine with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <head>
        <ColorSchemeScript />
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
