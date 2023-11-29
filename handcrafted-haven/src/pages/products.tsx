import React from 'react';
import Layout from '../components/layouts/Layout';

function ProductsPage () {
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

ProductsPage.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ProductsPage;