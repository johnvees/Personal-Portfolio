import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  const calculateTranslation = () => {
    const dx = position.x - window.innerWidth / 2; // calculate the horizontal distance from the center
    const dy = position.y - window.innerHeight / 2; // calculate the vertical distance from the center

    const maxX = window.innerWidth / 2 - 50; // maximum translation value in the horizontal direction
    const maxY = window.innerHeight / 2 - 50; // maximum translation value in the vertical direction

    // Calculate translation values based on cursor position and maximum translation values
    const translateX = Math.min(maxX, Math.max(-maxX, dx / 10));
    const translateY = Math.min(maxY, Math.max(-maxY, dy / 10));

    return `translate3d(${translateX}px, ${translateY}px, 0)`;
  };

  return (
    <section className="container-hero landing">
      <div className="row" style={{ height: '100%' }}>
        <div
          className="col-12 col-sm-12 col-md-8 col-lg-6 "
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1>
            Hello, <br /> I'm Yohanes Velly Sabattino as A Mobile/Web Developer
          </h1>
          <h4>
            Nice to meet you, I would like to welcome you with my personal
            portfolio
          </h4>
          <button
            type="button"
            class="btn btn-warning"
            style={{ width: '50%' }}
          >
            Primary
          </button>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-6  ">
          <div style={{ transform: calculateTranslation() }}>
            <img
              className="blob blob-1"
              src="https://picsum.photos/110/60"
              alt=""
            />
            <img
              className="blob blob-2"
              src="https://picsum.photos/110/60"
              alt=""
            />
            <img
              className="blob blob-3"
              src="https://picsum.photos/110/60"
              alt=""
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <img
              className="img-fluid photo"
              src="https://picsum.photos/300/400"
              alt=""
              style={{ paddingLeft: '60px', paddingRight: '60px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
