import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={`${archivo.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
