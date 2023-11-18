import React from 'react';
import Link from 'next/link';

export default function Footer () {
      return (
    <footer>
      <nav>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          {/* Add other footer links as needed */}
        </ul>
      </nav>
      <p>&copy; 2023 Artisan Sales Site</p>
    </footer>
  );
};

