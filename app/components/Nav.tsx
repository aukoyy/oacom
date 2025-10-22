"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects'},
  { label: 'Links', href: '/links'},
];

const NavLink = ({ item, currentPath }: { item: NavItem; currentPath: string }) => {
  const isExternal = item.href.includes('https://');
  const isCurrentPage = item.href === currentPath || (item.href !== '/' && currentPath.startsWith(item.href));
  return (
    <li className={`link-hover ${isCurrentPage ? 'link' : ''}`}>
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

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <nav className="flex flex-col md:flex-row md:justify-around items-center">
      <span>
        <a href="/"><Image src="/logo-portfolio.png" alt="" width={220} height={220} priority /></a>
      </span>
      <ul className="md:flex md:items-center space-x-8 text-slate-600 text-xl">
        {navItems.map(item => <NavLink key={item.href + item.label} item={item} currentPath={pathname} />)}
      </ul>
    </nav>
  );
}
