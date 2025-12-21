import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Cloud Native / SRE Engineer",
  description:
    "Portfolio of a Cloud Native Engineer and SRE specializing in Kubernetes, AWS, and infrastructure automation.",
  keywords: ["Cloud Native", "SRE", "DevOps", "Kubernetes", "AWS", "Terraform"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Your Name | Cloud Native / SRE Engineer",
    description: "Portfolio of a Cloud Native Engineer and SRE",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Cloud Native / SRE Engineer",
    description: "Portfolio of a Cloud Native Engineer and SRE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
