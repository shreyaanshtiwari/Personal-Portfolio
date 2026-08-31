import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyanshtiwari.swaddesh.in"),
  title: "Shreyansh Kumar Tiwari | Founder & CEO of SwadDesh",
  description:
    "Official digital portfolio of Shreyansh Kumar Tiwari, Founder & CEO of SwadDesh. Full-stack engineer building scalable web, Java Spring Boot & Flutter systems.",
  keywords: [
    "Shreyansh Tiwari",
    "Shreyansh Kumar Tiwari",
    "Shreyansh Tiwari SwadDesh",
    "Shreyansh Kumar Tiwari SwadDesh",
    "Shreyansh Tiwari Founder",
    "Shreyansh Tiwari Founder & CEO",
    "Shreyansh Tiwari SwadDesh Founder",
    "SwadDesh",
    "Founder & CEO",
    "Full Stack Vibe Coder",
    "Full Stack Developer",
    "Product Engineer",
    "Flutter",
    "Dart",
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "B.Tech CSE",
  ],
  authors: [{ name: "Shreyansh Kumar Tiwari", url: "https://github.com/shreyaanshtiwari" }],
  creator: "Shreyansh Kumar Tiwari",
  alternates: {
    canonical: "https://shreyanshtiwari.swaddesh.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreyanshtiwari.swaddesh.in/",
    title: "Shreyansh Kumar Tiwari | Founder & CEO of SwadDesh",
    description:
      "Official digital portfolio of Shreyansh Kumar Tiwari, Founder & CEO of SwadDesh. Full-stack engineer building scalable web, Java Spring Boot & Flutter systems.",
    siteName: "Shreyansh Kumar Tiwari Portfolio",
    images: [
      {
        url: "https://shreyanshtiwari.swaddesh.in/shreyansh-tiwari.png",
        width: 1200,
        height: 630,
        alt: "Shreyansh Kumar Tiwari — Founder & CEO of SwadDesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Kumar Tiwari | Founder & CEO of SwadDesh",
    description:
      "Official digital portfolio of Shreyansh Kumar Tiwari, Founder & CEO of SwadDesh. Full-stack engineer building scalable web, Java Spring Boot & Flutter systems.",
    images: ["https://shreyanshtiwari.swaddesh.in/shreyansh-tiwari.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png?v=2', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shreyanshtiwari.swaddesh.in/#person",
      name: "Shreyansh Kumar Tiwari",
      alternateName: [
        "Shreyansh Tiwari",
        "Shreyansh",
        "Shreyansh SwadDesh"
      ],
      url: "https://shreyanshtiwari.swaddesh.in/",
      image: "https://shreyanshtiwari.swaddesh.in/shreyansh-tiwari.png",
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        "@id": "https://swaddesh.in/#organization",
        name: "SwadDesh",
        url: "https://swaddesh.in"
      },
      description: "Founder & CEO of SwadDesh, Product Engineer, and Full Stack Developer specialized in Java Spring Boot, Flutter, and Next.js scalable ecosystems.",
      sameAs: [
        "https://linkedin.com/in/shreyansh-kumar-tiwari",
        "https://github.com/shreyaanshtiwari",
        "https://instagram.com/shreyaansh.tiwari"
      ],
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "System Architecture",
        "Java Spring Boot",
        "Flutter & Dart Mobile Development",
        "PostgreSQL & Supabase",
        "Next.js & React",
        "E-Commerce Systems"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://swaddesh.in/#organization",
      name: "SwadDesh",
      url: "https://swaddesh.in",
      founder: {
        "@id": "https://shreyanshtiwari.swaddesh.in/#person"
      },
      sameAs: [
        "https://instagram.com/swaddesh.in",
        "https://github.com/shreyaanshtiwari/SwadDesh-Prelaunch"
      ],
      description: "Digital food commerce and regional delicacy ecosystem connecting heritage artisans with consumers."
    },
    {
      "@type": "WebSite",
      "@id": "https://shreyanshtiwari.swaddesh.in/#website",
      url: "https://shreyanshtiwari.swaddesh.in/",
      name: "Shreyansh Kumar Tiwari | Founder & CEO of SwadDesh",
      description: "Official digital portfolio and systems showcase of Shreyansh Kumar Tiwari. Founder & CEO of SwadDesh and Full Stack Engineer.",
      publisher: {
        "@id": "https://shreyanshtiwari.swaddesh.in/#person"
      },
      inLanguage: "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://shreyanshtiwari.swaddesh.in/#profilepage",
      url: "https://shreyanshtiwari.swaddesh.in/",
      name: "Shreyansh Kumar Tiwari Portfolio",
      isPartOf: {
        "@id": "https://shreyanshtiwari.swaddesh.in/#website"
      },
      mainEntity: {
        "@id": "https://shreyanshtiwari.swaddesh.in/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth lenis">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-[#0C0709] text-[#FAF7F2] antialiased selection:bg-[#5A0F1C] selection:text-[#F3E5AB]`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
