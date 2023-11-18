import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
      <div>
        <main>
          <section>
            <img
              src="/path/to/your/big-image.jpg"
              alt="Big Image"
              style={{ width: '100%', height: 'auto' }}
            />
          </section>
          <section>
            <h1>Welcome to Artisan Sales Site</h1>
            <p>Explore our products and artisans.</p>
            <nav>
              <ul>
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
          </section>
        </main>
      </div>
  );
};

export default LandingPage;
