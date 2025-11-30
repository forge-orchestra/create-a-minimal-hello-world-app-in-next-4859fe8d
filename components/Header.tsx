import React from 'react';
import Link from 'next/link';
import { Home, Info, Contact } from 'lucide-react';

interface HeaderProps {
  links: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a aria-label="Home" className="text-gray-800 hover:text-blue-500">
              <Home className="w-6 h-6" />
            </a>
          </Link>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-gray-800 hover:text-blue-500">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href="/about">
            <a aria-label="About" className="text-gray-800 hover:text-blue-500">
              <Info className="w-6 h-6" />
            </a>
          </Link>
          <Link href="/contact">
            <a aria-label="Contact" className="text-gray-800 hover:text-blue-500">
              <Contact className="w-6 h-6" />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;