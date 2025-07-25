import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Supreme Group',
  description: 'Driving the future with nonwoven solutions from interior to exterior. Explore 360° automotive advancements.',
  keywords: 'Nonwoven, Automotive, Cabin, Trunk, Exterior, Innovation, Supreme Group',
  authors: [{ name: 'Supreme Group', url: 'https://supreme-group-peach.vercel.app' }],
  openGraph: {
    title: 'Supreme Group',
    description: 'Revolutionizing vehicle solutions with nonwoven innovation.',
    url: 'https://supreme-group-peach.vercel.app',
    siteName: 'Supreme Group',
    images: [
      {
        url: 'https://supreme-group-peach.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Supreme Group Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supreme Group',
    description: 'Revving up innovation from interior to exterior.',
    site: '@SupremeGroup',
    images: ['https://supreme-group-peach.vercel.app/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />

      <body
        className={`${ geistSans.variable } ${ geistMono.variable } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
