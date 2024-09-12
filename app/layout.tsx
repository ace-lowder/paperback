import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paperback",
  description: "Online book rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
