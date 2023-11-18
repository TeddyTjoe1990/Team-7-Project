import React from 'react';

const ProductsPage: React.FC = () => {
  return (
      <div className="bg-sandstone">
        <main className="p-8">
          <h1 className="text-4xl font-bold mb-4">Products Page</h1>
          <section className="product-grid">
            {/* Product listings using grid layout */}
          </section>
        </main>
      </div>
  );
};

export default ProductsPage;