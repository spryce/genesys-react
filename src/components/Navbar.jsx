import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import data from '../data.json';

const Navbar = ({ onCategorySelect, onSeriesSelect }) => {
  const { categories, series } = data;
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId, event) => {
    event.preventDefault(); // Prevent default `<a>` navigation
    onCategorySelect(categoryId);
    onSeriesSelect(null); // Reset series selection when switching categories
    navigate("/");
  };
  

  const handleSeriesClick = (seriesId, event) => {
    event.preventDefault(); // Prevent default `<a>` behavior
    onSeriesSelect(seriesId);
    onCategorySelect(null); // Reset category selection when switching series
    navigate("/");
  };

  return (
    <ul className="nav">
      <li>
        <h3><a href="/">All Products</a></h3>
        {/* <h3><a href="/" onClick={(event) => handleCategoryClick(null, event)}>All Products</a></h3> */}
      </li>

      {categories.map((category) => {
        const categorySeries = series.filter((s) => s.categoryId === category.categoryId);

        return (
          <li key={category.categoryId}>
            <h3>
              <a href="/" onClick={(event) => handleCategoryClick(category.categoryId, event)}>
                {`${category.categoryName.charAt(0).toUpperCase()}${category.categoryName.slice(1)}`} Guitars
              </a>
            </h3>
            {categorySeries.length > 0 && (
              <ul className="subnav">
                {categorySeries.map((s) => (
                  <li key={s.seriesId}>
                    <a href="/" onClick={(event) => handleSeriesClick(s.seriesId, event)}>
                      {s.seriesName.toUpperCase()} Series
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

        );
      })}
      
      <li>
        <h3><a href="/about">About</a></h3>
      </li>
    </ul>
  );
};

export default Navbar;