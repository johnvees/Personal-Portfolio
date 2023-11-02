import React from 'react';
import ILAboutPict from '../../../assets/images/aboutPictLanding.webp';

export default function About() {
  return (
    <section className="container-landing about">
      <div className="row align-items-center pt-5 pb-5">
        <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
          <img
            className="img-fluid"
            src={ILAboutPict}
            alt="Landing About Illustration"
          />
        </div>
        <div className="col-sm-6 col-md-8 col-lg-6">
          <h4 className="mb-2">ABOUT ME</h4>
          <h2 className="mb-2">
            Crafting Digital Excellence: Your Developer for Exceptional Result
          </h2>
          <h5 className="mb-3">
            As a developer, I specialize in crafting exceptional digital
            solutions with ReactJS and React Native, bringing creativity and
            meticulousness to every project. Let's collaborate to turn your
            vision into a digital reality that stands out in today's competitive
            landscape.
          </h5>
          <div className="container-project mb-2">
            <h6 className="title">5 Complete Project</h6>
            <h6>
              Including College Projects, Internship, Bootcamp, Online Courses,
              Coding events like Hacktoberfest, and etc.
            </h6>
          </div>
          <div className="container-experience mb-2">
            <h6 className="title">Fresh Graduate</h6>
            <h6>
              Project experience are from College Projects, Internship,
              Bootcamp, Online Courses, Coding events like Hacktoberfest, and
              etc.
            </h6>
          </div>
          <div className="row align-items-center justify-content-center ml-1 mr-1 mb-2">
            <div
              className="col-sm-3 col-md-3 col-lg-3 d-none d-md-block"
              style={{
                borderBottom: '1px solid black',
              }}
            ></div>
            <div className="col-sm-6 col-md-6 col-lg-6 text-center">
              <h6 className="info">Download my Curriculum Vitae, below</h6>
            </div>
            <div
              className="col-sm-3 col-md-3 col-lg-3 d-none d-md-block"
              style={{
                borderBottom: '1px solid black',
              }}
            ></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-2">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: '100%' }}
              >
                English Version
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <button
                type="button"
                className="btn btn-warning"
                style={{ width: '100%' }}
              >
                Bahasa Version
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
