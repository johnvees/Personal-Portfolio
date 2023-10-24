import React, { useState, useEffect } from 'react';

export default function TestPage() {
  const items = [
    { id: 1, imageUrl: 'https://picsum.photos/500/500', width: 900 },
    { id: 2, imageUrl: 'https://picsum.photos/500/500', width: 400 },
    { id: 3, imageUrl: 'https://picsum.photos/500/500', width: 850 },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const handlePrevious = () => {
    setCurrentItem((currentItem - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentItem ? 'active' : ''}`}
            style={{ width: item.width }}
          >
            <img
              src={item.imageUrl}
              alt={`Item ${item.id}`}
              style={{ width: '100%', height: '100%' }}
            />$$
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrevious}>
        Previous
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
