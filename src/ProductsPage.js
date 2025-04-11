import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        if (category) {
          setProducts(data.products.filter(product => product.category === category));
        } else if (series) {
          setProducts(data.products.filter(product => product.series === series));
        } else {
          setProducts(data.products);
        }
      });
  }, [category, series]);

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button onClick={() => setCategory(null)}>All Products</button>
        <button onClick={() => setCategory("electric")}>Electric Guitars</button>
        <button onClick={() => setCategory("acoustic")}>Acoustic Guitars</button>
        {/* Add more categories as needed */}
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;