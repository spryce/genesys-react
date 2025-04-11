import React, { useState } from 'react';
import SideNav from './components/SideNav';
import ProductGrid from './components/ProductGrid';
import data from './data.json';

const App = () => {
  const { categories, series, products } = data;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        series.find((s) => s.seriesId === product.seriesId && s.categoryId === selectedCategory)
      )
    : products;

  return (
    <div id="container">
      <main id="main-content">
        <h1>Product Catalog</h1>
        <div className="content-wrapper">
          <SideNav
            categories={categories}
            series={series}
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
};

export default App;