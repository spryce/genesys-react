import React from 'react';
import './Navbar.css';
import data from '../data.json'; // Import the JSON data

const Navbar = () => {
  const { categories, series } = data;

  return (
    <ul className="nav">
      <li>
        <h3><a href="/">All Products</a></h3>
      </li>

      {categories.map((category) => {
        // Filter series belonging to the current category
        const categorySeries = series.filter((s) => s.categoryId === category.categoryId);

        return (
          <li key={category.categoryId}>
            <h3>
              <a href={`/category/${category.categoryId}`}>
                {`${category.categoryName.charAt(0).toUpperCase()}${category.categoryName.slice(1)}`} Guitars
              </a>
            </h3>
            {categorySeries.length > 0 && (
              <ul className="subnav">
                {categorySeries.map((s) => (
                  <li key={s.seriesId}>
                    <a href={`/series/${s.seriesId}`}>{s.seriesName.toUpperCase()} Series</a>
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