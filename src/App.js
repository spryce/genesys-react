import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import data from './data.json';
import './App.css';

const App = () => {
  const { categories, series, products } = data;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        series.find((s) => s.seriesId === product.seriesId && s.categoryId === selectedCategory)
      )
    : products;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout categories={categories} onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />}>
          <Route index element={<ProductGrid products={filteredProducts} />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;