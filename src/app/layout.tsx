import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  // The site leans on 600/700/800 for headings and 400/500 for body copy.
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advika Construction",
  description:
    "General contracting for residential, commercial and industrial projects since 1998.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
