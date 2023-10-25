import React from 'react';

export default function Service() {
  return (
    <section className="container-landing mb-5 mt-5">
      <div className="col text-center">
        <h3>SERVICES</h3>
        <h2>
          Comprehensive Development Expertise: Your Partner for Mobile, Web, and
          Backend Solutions
        </h2>
        <div className="row align-items-center mb-5">
          <div className="col-2"></div>
          <div className="col-8">
            <h5>
              As a developer, I'm passionate about crafting dynamic solutions
              spanning mobile apps, web design, and backend systems. Let's
              collaborate to transform your ideas into exceptional digital
              realities that elevate your digital presence and drive success in
              the tech landscape.
            </h5>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-3 p-4"
            style={{
              backgroundColor: '#E7E7E7',
              borderRadius: '10px',
              height: '460px',
            }}
          >
            <img className="mb-4" src="https://picsum.photos/140/150" alt="" />
            <h3 className="h2 mb-3">Mobile Development</h3>
            <h5>
              Using React Native, I create mobile apps that seamlessly run on
              both Android and iOS, saving time and resources while delivering
              an exceptional user experience.
            </h5>
          </div>
          <div
            className="col-3 p-4 ml-4 mr-4"
            style={{
              backgroundColor: '#E7E7E7',
              borderRadius: '10px',
              height: '460px',
            }}
          >
            <img className="mb-4" src="https://picsum.photos/140/150" alt="" />
            <h3 className="h2 mb-3">Web Development</h3>
            <h5>
              Utilizing the MERN stack, I develop web applications that embody
              efficiency and excellence, providing a seamless experience for
              users across various platforms.
            </h5>
          </div>
          <div
            className="col-3 p-4"
            style={{
              backgroundColor: '#E7E7E7',
              borderRadius: '10px',
              height: '460px',
            }}
          >
            <img className="mb-4" src="https://picsum.photos/140/150" alt="" />
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
