import React from 'react';
import { Metadata } from 'next';
import { AppProps } from 'next/app';
import { LucideIcon } from 'lucide-react';
import { ForgeProvider } from '@forge-ui/react';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Forge-app',
  description: 'A minimalistic Next.js app with Forge UI components',
  viewport: 'width=device-width, initial-scale=1',
};

const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <ForgeProvider>
          <header className="bg-white shadow">
            <nav className="container mx-auto p-4 flex justify-between items-center">
              <div className="text-xl font-bold">Forge-app</div>
              <div>
                <LucideIcon name="menu" className="w-6 h-6" />
              </div>
            </nav>
          </header>
          <main className="container mx-auto p-4">
            <Component {...pageProps} />
          </main>
          <footer className="bg-white shadow mt-8">
            <div className="container mx-auto p-4 text-center">
              <p>&copy; 2023 Forge-app. All rights reserved.</p>
            </div>
          </footer>
        </ForgeProvider>
      </body>
    </html>
  );
};

export default RootLayout;