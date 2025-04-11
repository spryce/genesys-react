import React from 'react';
import './SideNav.css';

const SideNav = ({ categories, series, onCategorySelect, selectedCategory }) => (
  <aside className="side-nav">
    <ul>
      <li onClick={() => onCategorySelect(null)} className={!selectedCategory ? 'active' : ''}>
        <a href="#">All Products</a>
      </li>
      {categories.map((category) => (
        <li key={category.categoryId} onClick={() => onCategorySelect(category.categoryId)}>
          <a href="#" className={selectedCategory === category.categoryId ? 'active' : ''}>
            {category.categoryName.charAt(0).toUpperCase() + category.categoryName.slice(1)} Guitars
          </a>
          <ul>
            {series
              .filter((s) => s.categoryId === category.categoryId)
              .map((s) => (
                <li key={s.seriesId}>
                  <a href="#">{s.seriesName.toUpperCase()} Series</a>
                </li>
              ))}
          </ul>
        </li>
      ))}
      <li><a href="/about">About Genesys</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login">Dealer Login</a></li>
    </ul>
  </aside>
);

export default SideNav;