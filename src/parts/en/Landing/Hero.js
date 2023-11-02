import React, { useState, useEffect } from 'react';
import ILHeroPict from '../../../assets/images/heroPictLanding.webp';

export default function Hero() {
  return (
    <section className="container-landing hero">
      <div className="row align-items-center" style={{ height: '100%' }}>
        <div className="col-sm-12 col-md-8 col-lg-6">
          <h1 className="mb-3">
            Hello, <br /> I'm Yohanes Velly Sabattino as A Mobile/Web Developer
          </h1>
          <h4 className="mb-5">
            Nice to meet you, I would like to welcome you with my personal
            portfolio
          </h4>
          <button
            type="button"
            className="btn btn-warning col-sm-12 col-md-8 col-lg-6"
          >
            Get Started
          </button>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-6 d-flex flex-column mt-auto">
          <div className="align-self-end">
            <img
              className="img-fluid"
              src={ILHeroPict}
              alt="Landing Hero Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
