import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link href="/artisans">
              Artisans
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
