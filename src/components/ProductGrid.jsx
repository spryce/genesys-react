import React from 'react';
import { Link } from "react-router-dom";
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  
  const imageBasePath = '/assets/images/products/';

  return (
    <div className="main-body">
      {products.map((product) => {
        // Dynamically construct the image path
        const imagePath = `${imageBasePath}${product.model.toLowerCase()}.jpg`;

        return (
          <Link key={product.id} to={`/product/${product.id}`} className="prod-card">
            <img src={imagePath} alt={product.model} />
              <h2 className="prod-title">{product.model}</h2>
              <p>{product.short}</p>
              <hr></hr>
              <p>${product.rrp.toFixed(2)}</p>              
          </Link>
        )
      })}
    </div>
  );
};

export default ProductGrid;
