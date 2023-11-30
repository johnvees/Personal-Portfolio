import React from 'react';
import ILCarouselWeb from '../../../assets/images/carouselWeb.webp';
import ILCarouselMobile from '../../../assets/images/carouselMobile.webp';
import ILCarouselBackend from '../../../assets/images/carouselBackend.webp';
import icPrevCarousel from '../../../assets/images/icPrevCarousel.svg';
import icNextCarousel from '../../../assets/images/icNextCarousel.svg';
import Fade from 'react-reveal/Fade';

export default function Project() {
  const carouselImages = [ILCarouselWeb, ILCarouselMobile, ILCarouselBackend];

  return (
    <section className="container-landing project pt-5 pb-5">
      <div className="row align-items-center mb-5">
        <Fade left cascade>
          <div className="col-sm-12 col-lg-6 flex-start">
            <h4>PROYEK TERDAHULU</h4>
            <h2>Proyek-Proyek Terbaru Saya</h2>
          </div>
        </Fade>
        <Fade right cascade>
          <div className=" d-flex ml-auto">
            <div className="col">
              <h5>Lihat lebih banyak proyek yang telah saya kerjakan</h5>
              <a href="/id/web-dev">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Lihat Lebih Banyak
                </button>
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <Fade bottom cascade>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          style={{ height: '100%' }}
        >
          <ol className="carousel-indicators">
            {carouselImages.map((image, index) => (
              <li
                key={index}
                data-target="#carouselExampleFade"
                data-slide-to={index}
                className={index === 0 ? 'active' : ''}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                data-interval="2000"
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="prev"
          >
            <img src={icPrevCarousel} alt="" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="next"
          >
            <img src={icNextCarousel} alt="" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </Fade>
    </section>
  );
}
