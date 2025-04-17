import React, { useEffect, useRef } from "react";
import data from '../data.json';
import "./ScrollingImageCarousel.css";

const ScrollingImageCarousel = () => {
    const imagePath = "./assets/images/scrolling-carousel/";
    const carouselRef = useRef(null);
    const images = data.carousel.map((image) => `${imagePath}${image}`);

    useEffect(() => {
      if (!carouselRef.current) return; // Ensure ref exists before modifying styles
  
      const totalWidth = images.length * (200 + 20);
      carouselRef.current.style.width = `${totalWidth}px`;
  
      // Reset animation before restarting
      carouselRef.current.style.animation = "none";
      setTimeout(() => {
          if (carouselRef.current) {
              carouselRef.current.style.animation = "scrollLeft 80s linear infinite";
          }
      }, 10);
  
      // Cleanup function to reset animation on unmount
      return () => {
          if (carouselRef.current) {
              carouselRef.current.style.animation = "none";
          }
      };
  }, []);


    return (
        <div className="scroll-carousel-container">
          <div className="scroll-carousel" ref={carouselRef}>
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
      );          
  };

export default ScrollingImageCarousel;