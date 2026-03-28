import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageLoader from "../components/PageLoader";
import ScrollToHomeButton from "../components/ScrollToHomeButton";
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
  title: "Raj Laxmi Wooden Furniture ",
  description: "Leading rice mill providing premium quality rice processing and distribution services",
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
        <PageLoader>
          {children}
          <ScrollToHomeButton />
        </PageLoader>
      </body>
    </html>
  );
}
