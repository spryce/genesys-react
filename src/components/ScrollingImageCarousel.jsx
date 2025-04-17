import React, { useEffect, useRef } from "react";
import data from '../data.json';
import "./ScrollingImageCarousel.css";

const ScrollingImageCarousel = () => {
    const imagePath = "./assets/images/scrolling-carousel/";
    const carouselRef = useRef(null);
    const images = data.carousel.map((image) => `${imagePath}${image}`);

    useEffect(() => {
        const totalWidth = images.length * (200 + 20); // Image width + gap
        carouselRef.current.style.width = `${totalWidth}px`; // Set total width dynamically
    }, []);

    return (
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
      );          
  };

export default ScrollingImageCarousel;