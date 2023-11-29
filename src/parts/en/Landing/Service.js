import React from 'react';
import ICMobileDev from '../../../assets/images/iconMobileDev.svg';
import ICWebDev from '../../../assets/images/iconWebDev.svg';
import ICBackendDev from '../../../assets/images/iconBackendDev.svg';

export default function Service() {
  return (
    <section className="container-landing service pb-5 pt-5">
      <div className="col-sm-12 col-md-12 col-lg-12 text-center">
        <h4>SERVICES</h4>
        <h2>
          Comprehensive Development Expertise: Your Partner for Mobile, Web, and
          Backend Solutions
        </h2>
        <div className="row align-items-center mb-5">
          <div className="col-md-1 col-lg-2 d-none d-md-block"></div>
          <div className="col-sm-12 col-md-10 col-lg-8">
            <h5>
              As a developer, I'm passionate about crafting dynamic solutions
              spanning mobile apps, web design, and backend systems. Let's
              collaborate to transform your ideas into exceptional digital
              realities that elevate your digital presence and drive success in
              the tech landscape.
            </h5>
          </div>
          <div className="col-md-1 col-lg-2 d-none d-md-block"></div>
        </div>
        <div className="row justify-content-center">
          <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
            <img
              className="mb-4"
              src={ICMobileDev}
              alt="Mobile Development Icon"
            />
            <h3 className="h2 mb-3">Mobile Development</h3>
            <h5>
              Using React Native, I create mobile apps that seamlessly run on
              both Android and iOS, saving time and resources while delivering
              an exceptional user experience.
            </h5>
          </div>
          <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
            <img className="mb-4" src={ICWebDev} alt="Web Development Icon" />
            <h3 className="h2 mb-3">Web Development</h3>
            <h5>
              Utilizing the MERN stack, I develop web applications that embody
              efficiency and excellence, providing a seamless experience for
              users across various platforms.
            </h5>
          </div>
          <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
            <img
              className="mb-4"
              src={ICBackendDev}
              alt="Backend Development Icon"
            />
            <h3 className="h2 mb-3">Backend Development</h3>
            <h5>
              With NodeJS and the ExpressJS framework, I specialize in crafting
              efficient and powerful backend solutions that drive the seamless
              functionality of web and mobile applications.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
