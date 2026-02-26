import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Shreyansh Kumar Tiwari | Student Developer Portfolio",
  description: "Personal developer portfolio of Shreyansh Kumar Tiwari showcasing projects, skills, and contact information.",
  keywords: ["Shreyansh Kumar Tiwari", "Portfolio", "Student Developer", "Web Development", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Shreyansh Kumar Tiwari | Student Developer Portfolio",
    description: "Personal developer portfolio of Shreyansh Kumar Tiwari showcasing projects, skills, and contact information.",
    type: "website",
    url: "https://yourportfolio.com", // Replace with real URL when deploying
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
