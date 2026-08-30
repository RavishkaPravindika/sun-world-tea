import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Sun World Tea — Premium Ceylon Tea',
    template: '%s | Sun World Tea',
  },
  description:
    'Sun World Tea offers a carefully selected range of premium Ceylon teas including OP, BOP, BOPF, FBOP, Green Tea and specialty varieties. Discover the art of exceptional tea.',
  keywords: [
    'Sun World Tea',
    'Ceylon tea',
    'Sri Lankan tea',
    'premium tea',
    'black tea',
    'green tea',
    'OP tea',
    'BOP tea',
    'BOPF tea',
    'FBOP tea',
    'loose leaf tea',
    'tea shop',
    'Orange Pekoe',
    'Broken Orange Pekoe',
  ],
  authors: [{ name: 'Sun World Tea' }],
  creator: 'Sun World Tea',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sunworldtea.com',
    siteName: 'Sun World Tea',
    title: 'Sun World Tea — Premium Ceylon Tea',
    description:
      'Carefully selected premium Ceylon teas with a commitment to quality, character and authentic tea culture.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sun World Tea — Premium Ceylon Tea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun World Tea — Premium Ceylon Tea',
    description: 'Carefully selected premium Ceylon teas with a commitment to quality and authentic tea culture.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
