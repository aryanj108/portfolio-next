import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";

const portfolioBackground = "rgb(18, 18, 18)";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: portfolioBackground,
};

const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={robotoMono.variable}
      style={{ backgroundColor: portfolioBackground, colorScheme: "dark" }}
    >
      <body
        className="bg-body-grey min-h-screen text-white"
        style={{ backgroundColor: portfolioBackground, color: "#ffffff" }}
      >
        <div className="mx-auto mt-5 max-w-3xl sm:mt-10 sm:flex">
          {children}
        </div>
      </body>
    </html>
  );
}
