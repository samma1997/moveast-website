import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Move East Trading — Strategic Procurement & Sourcing from China",
  description:
    "Connecting global enterprises with China's manufacturers. Strategic sourcing, technology transfer, and supply chain management from Shenzhen. CICC member, UNGM registered.",
  metadataBase: new URL("https://moveasttrading.com"),
  openGraph: {
    title: "Move East Trading — Strategic Procurement Partner in China",
    description:
      "Connecting global enterprises with China's manufacturers. Strategic sourcing, technology transfer, and supply chain management from Shenzhen.",
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
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased font-[family-name:var(--font-inter)]">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
