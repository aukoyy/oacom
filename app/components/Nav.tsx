"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export type NavItem = { label: string; href: string };

interface NavLinkProps {
  item: NavItem;
  currentPath: string;
}

interface NavProps {
  navItems: NavItem[];
}

const NavLink = (props: NavLinkProps) => {
  const { item, currentPath } = props;
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


//export default function Nav({ navItems }: { navItems: NavItem[] }) {
export default function Nav(props: NavProps) {
  const { navItems } = props;
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
