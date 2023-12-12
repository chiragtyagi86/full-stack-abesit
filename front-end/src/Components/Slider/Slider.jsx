
import React, { useState, useEffect } from 'react';
import './Slider.css'; 

const images = [
  'https://www.abesit.in/wp-content/uploads/2023/07/desktop-banner-abesit.webp',
'https://www.abesit.in/wp-content/uploads/2023/05/abes_img.jpg',
  'https://www.abesit.in/wp-content/uploads/2023/05/home-ban-2-scaled.jpg',
  // Add more image URLs as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Img ${index + 1}`} />
        ))}
      </div>
      <button className="prev btn" onClick={prevSlide}>
      &lt;


      </button>
      <button className="next btn" onClick={nextSlide}>
      &gt; 
      </button>
    </div>
  );
};

export default Slider;
