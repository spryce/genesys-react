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
  const [selectedSeries, setSelectedSeries] = useState(null);

  const filteredProducts = products.filter((product) => {
    // Apply category filter if selected
    const categoryMatch = selectedCategory
      ? series.some((s) => s.seriesId === product.seriesId && s.categoryId === selectedCategory)
      : true;
    
    // Apply series filter if selected
    const seriesMatch = selectedSeries ? product.seriesId === selectedSeries : true;

    return categoryMatch && seriesMatch; // Ensure both filters are respected
  });


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onCategorySelect={setSelectedCategory}
            selectedSeries={selectedSeries}
            onSeriesSelect={setSelectedSeries} 
            />
          }>
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