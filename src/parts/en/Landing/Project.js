import React, { useState } from 'react';

export default function Project() {
  

  return (
    <section className="container-hero project pt-5 pb-5">
      <div className="row align-items-center mb-5">
        <div className="col-sm-6 col-lg-6 flex-start">
          <h3>PROJECTS</h3>
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
      
    </section>
  );
}
