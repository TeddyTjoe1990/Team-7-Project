import React from 'react';
import Link from 'next/link';

export default function Footer () {
      return (
    <footer className='text-lg bg-brown text-white'>
      <nav>
        <ul>
          <Link href="/about" className="hover:text-blue-300 cursor-pointer">
            <li>Contact</li>
          </Link>
          <Link href="/about" className="hover:text-blue-300 cursor-pointer">
            <li>Privacy Policy</li>
          </Link>
          {/* Add other footer links as needed */}
        </ul>
      </nav>
      <p>&copy; 2023 Artisan Sales Site</p>
    </footer>
  );
};

