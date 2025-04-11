import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Load JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find((p) => p.id.toString() === id);
        setProduct(foundProduct);
      });
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
          <p>Price: ${product.price}</p>
          <p>Specifications: {product.specifications}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetails;