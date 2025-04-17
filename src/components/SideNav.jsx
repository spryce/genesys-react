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
        </li>
      ))}
      <li><a href="/about">About</a></li>
      <li><a href="/feedback">Feedback</a></li>
    </ul>
  </aside>
);

export default SideNav;