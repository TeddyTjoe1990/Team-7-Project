import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <main className="main-section p-8">
      <section>
        <img
          src="/path to banner-image.jpg"
          alt="Big Image"
          className="w-full"
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to Artisan Sales Site</h1>
        <p className="text-center mb-8">Explore our products and artisans.</p>
        <nav className="flex justify-center mb-8">
          <ul className="flex space-x-4">
            <li>
              <a href="/products" className="nav-link">Products</a>
            </li>
            <li>
              <a href="/artisans" className="nav-link">Artisans</a>
            </li>
            <li>
              <a href="/about" className="nav-link">About</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default LandingPage;
