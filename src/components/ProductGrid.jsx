import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  const imageBasePath = '/assets/images/products/'; // Path to images folder

  return (
    <div className="main-body">
      {products.map((product) => {
        // Dynamically construct the image path
        const imagePath = `${imageBasePath}${product.model.toLowerCase()}.jpg`;

        return (
          <div key={product.id} className="prod-grid">
            <img src={imagePath} alt={product.model} />
            <h2 className="prod-title">{product.model}</h2>
            <p>Construction: {product.construction || 'N/A'}</p>
            <p>Body: {product.body || 'N/A'}</p>
            <p>Price: ${product.rrp.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;