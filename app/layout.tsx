import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilzing - Build Any Website Effortlessly",
  description:
    "Create stunning ecommerce stores, landing pages, portfolios, and more with Bilzing's powerful no-code platform. From idea to launch in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
