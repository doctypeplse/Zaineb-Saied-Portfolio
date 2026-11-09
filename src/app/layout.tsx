
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://zaineb-saied-portfolio.zainebsaied.workers.dev"
  ),

  title: "Zaineb Saied",
  description: "Portfolio of Zaineb Saied.",

  openGraph: {
    title: "Zaineb Saied | UX/UI Designer & Front-End Developer",
    description: "Portfolio of Zaineb Saied.",
    url: "https://zaineb-saied-portfolio.zainebsaied.workers.dev",
    siteName: "Zaineb Saied",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaineb Saied Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaineb Saied",
    description: "Portfolio of Zaineb Saied.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
