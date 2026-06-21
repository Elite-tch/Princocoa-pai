import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/footer";
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Princocoa Studios × PAI Consulting — Brand, Content & Visibility Ecosystem",
  description: "Princocoa Studios × PAI Consulting helps founders, coaches, creatives, and professionals build their brand, create strategic content, grow their digital presence, and expand their visibility through personal branding, content production, and platform management.",
  keywords: "personal branding Nigeria, content production, brand strategy, visibility, influencer, PAI Consulting, Princocoa Studios",
  openGraph: {
    title: "Princocoa Studios × PAI Consulting",
    description: "Build the brand. Tell the story. Grow the audience.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
