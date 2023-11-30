import React from 'react';
import ILHeroPict from '../../../assets/images/heroPict.webp';
import Fade from 'react-reveal/Fade';

export default function Hero() {
  const handleScroll = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 1000,
      behavior: 'smooth', // Optional: Adds smooth scrolling animation
    });
  };

  return (
    <section className="container-landing hero">
      <div className="row align-items-center" style={{ height: '100%' }}>
        <Fade bottom cascade>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <h1 className="mb-3">
              Halo, <br /> Saya Yohanes Velly Sabattino Sebagai Mobile/Web
              Developer
            </h1>
            <h4 className="mb-5">
              Senang bertemu dengan Anda, inilah portfolio pribadi saya, kiranya Anda dapat mempertimbangkan portfolio saya
            </h4>
            <button
              className="btn btn-warning col-sm-12 col-md-8 col-lg-6"
              onClick={handleScroll}
            >
              Mulai Sekarang!
            </button>
          </div>
        </Fade>

        <Fade cascade>
          <div className="col-sm-12 col-md-4 col-lg-6 d-flex flex-column mt-auto">
            <div className="align-self-end">
              <img
                className="img-fluid"
                src={ILHeroPict}
                alt="Landing Hero Illustration"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
