import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
}

function Header({ isLoggedIn, userName }: HeaderProps) {
  return (
    <header className="bg-brown text-white">
    <nav className="flex justify-center text-3xl">
      <ul className="flex space-x-8 m-3 p-6">
        <li>
          <Link href="/" className="hover:text-gray-300 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-gray-300 cursor-pointer">
            Products
          </Link>
        </li>
        <li>
          <Link href="/artisans" className="hover:text-gray-300 cursor-pointer">
            Artisans
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 cursor-pointer">
            About
          </Link>
        </li>
      </ul>
      <div className="flex space-x-8 m-3 p-6">
        {isLoggedIn ? (
          <span>{userName}</span>) : (
          <Link href="/login" className="hover:text-gray-300 cursor-pointer">
            Login
          </Link>
        )}
      </div>
    </nav>
  </header>
  );
};

export default Header;
