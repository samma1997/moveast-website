import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Move East Trading — Strategic Procurement from China",
  description:
    "Connecting global enterprises with China's manufacturers. Strategic sourcing, technology transfer, and supply chain management from Shenzhen. CICC Board Member, UNGM Registered Vendor.",
  metadataBase: new URL("https://moveasttrading.com"),
  openGraph: {
    title: "Move East Trading — Your Bridge to China's Industrial Power",
    description:
      "Strategic sourcing, technology transfer, and supply chain management from Shenzhen. Official outsourcing agent for the Ethiopia-Djibouti Railway.",
    type: "website",
    locale: "en_US",
    siteName: "Move East Trading",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
