import React, { useState } from 'react';

export default function Project() {
  return (
    <section className="container-landing project pt-5 pb-5">
      <div className="row align-items-center mb-5">
        <div className="col-sm-6 col-lg-6 flex-start">
          <h4>PROJECTS</h4>
          <h2>My Latest Projects Showcase</h2>
        </div>
        <div className=" d-flex ml-auto">
          <div className="col">
            <h5>Check out more projects I have worked on</h5>
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: '100%' }}
            >
              Show More
            </button>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        style={{ height: '100%' }}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleFade"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleFade" data-slide-to="1"></li>
          <li data-target="#carouselExampleFade" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/1500/500"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1500/500"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1500/500"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  );
}
