import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Move East Trading — Strategic Procurement & Sourcing from China",
  description:
    "Move East Trading connects global enterprises with China's manufacturers. Strategic sourcing, technology transfer, and supply chain management from Shenzhen. CICC member, UNGM registered.",
  openGraph: {
    title: "Move East Trading — Your Strategic Procurement Partner in China",
    description:
      "Move East Trading connects global enterprises with China's manufacturers. Strategic sourcing, technology transfer, and supply chain management from Shenzhen.",
    type: "website",
    locale: "en_US",
    siteName: "Move East Trading",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
