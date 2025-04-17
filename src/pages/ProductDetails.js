import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Ensure your product data includes multiple images
import JsonPrinter from "../components/JsonPrinter";
import './ProductDetails.css'; 

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from URL params
  const product = data.products.find((p) => p.id === Number(productId));
  const imageBasePath = `/assets/images/products/${product.model.toLowerCase()}/`; // Path to images folder
  const imageFiles = product.images.map((imgName) => `${imageBasePath}${imgName}`);

  const [selectedImage, setSelectedImage] = useState(imageFiles[0]); //useState(product.images[0]); // Default image

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div className="prod-header">
        <h1>GENESYS {product.model}</h1>        
      </div>
      <div className="prod-description">
        <p>{product.description}</p>
      </div>
      {/* Textual listed content section */}
      <div className="prod-info">                
        <JsonPrinter data={product} />
      </div>

      {/* Image Carousel section */}
      <div className="carousel">
        <img src={selectedImage} alt="Selected Product" className="main-image" />
        <div className="thumbnail-container">
          {imageFiles.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;