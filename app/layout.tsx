import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav, { NavItem } from "./components/Nav";
import classNames from "classnames";

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

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Links', href: '/links' },
];

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          geistSans.variable, geistMono.variable,
          'antialiased pb-24',
          // 'dark:bg-neutral-950'
        )}>
        <Nav navItems={navItems} />
        <div className="flex justify-center">
          <div className="px-4 max-w-7xl lg:px-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
