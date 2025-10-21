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

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects'},
  { label: 'Github', href: 'https://github.com/aukoyy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oyvindaukner/' },
  { label: 'Youtube', href: 'https://www.youtube.com/@AukOps' },
  { label: 'About', href: '/about' },
];

const NavLink = ({ item }: { item: NavItem }) => {
  const isExternal = item.href.includes('https://');
  return (
    <li className="hover:text-sky-800">
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {item.label}
      </a>
    </li>
  );
}

const Nav = () => (
  <nav className="flex flex-col md:flex-row md:justify-around items-center">
    <span>
      <a href="/"><Image src="/logo-portfolio.png" alt="" width={220} height={220} priority /></a>
    </span>
    <ul className="md:flex md:items-center space-x-8 text-xl">
      {navItems.map(item => <NavLink key={item.href + item.label} item={item} />)}
    </ul>
  </nav>
);

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
