import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Øyvind Aukner",
  description: "Øyvinds portfolio site",
};

const Nav = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-around items-center">
      <span><a href="/"><Image src="/logo-portfolio.png" alt="" width={220} height={220} priority className="" /></a></span>
      <ul className="flex space-x-16 text-2xl">
        <li>
          <a href="/about">
            About
          </a>
        </li>
        <li>
          <a href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

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
        <Nav />
        {children}
      </body>
    </html>
  );
}
