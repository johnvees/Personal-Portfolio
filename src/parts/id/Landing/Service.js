import React from 'react';
import ICMobileDev from '../../../assets/images/iconMobileDev.svg';
import ICWebDev from '../../../assets/images/iconWebDev.svg';
import ICBackendDev from '../../../assets/images/iconBackendDev.svg';
import Fade from 'react-reveal/Fade';

export default function Service() {
  return (
    <section className="container-landing service pb-5 pt-5">
      <div className="col-sm-12 col-md-12 col-lg-12 text-center">
        <Fade bottom cascade>
          <div>
            <h4>LAYANAN</h4>
            <h2>
              Keahlian Pengembangan Komprehensif: Partner Anda untuk Solusi
              Mobile, Web, dan Backend
            </h2>
            <div className="row align-items-center mb-5">
              <div className="col-md-1 col-lg-2 d-none d-md-block"></div>
              <div className="col-sm-12 col-md-10 col-lg-8">
                <h5>
                  Sebagai seorang pengembang, saya memiliki minat untuk
                  menciptakan solusi dinamis yang melibatkan aplikasi mobile,
                  desain web, dan sistem backend. Mari berkolaborasi untuk
                  mengubah ide-ide Anda menjadi realitas digital yang luar
                  biasa, meningkatkan kehadiran digital Anda, dan mencapai
                  kesuksesan dalam dunia teknologi.
                </h5>
              </div>
              <div className="col-md-1 col-lg-2 d-none d-md-block"></div>
            </div>
          </div>
        </Fade>
        <div className="row justify-content-center">
          <Fade left cascade>
            <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
              <img
                className="mb-4"
                src={ICMobileDev}
                alt="Mobile Development Icon"
              />
              <h3 className="h2 mb-3">Mobile Development</h3>
              <h5>
                Dengan menggunakan React Native, saya membuat aplikasi mobile
                yang berjalan mulus di kedua platform Android dan iOS, menghemat
                waktu dan sumber daya selagi memberikan pengalaman pengguna yang
                luar biasa.
              </h5>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
              <img className="mb-4" src={ICWebDev} alt="Web Development Icon" />
              <h3 className="h2 mb-3">Web Development</h3>
              <h5>
                Dengan menggunakan teknologi MERN, saya mengembangkan aplikasi
                web yang mencerminkan efisiensi dan keunggulan, memberikan
                pengalaman yang mulus bagi pengguna di berbagai platform.
              </h5>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="container-service col-sm-12 col-md-12 col-lg-3 p-4 ml-2 mr-2 mb-3">
              <img
                className="mb-4"
                src={ICBackendDev}
                alt="Backend Development Icon"
              />
              <h3 className="h2 mb-3">Backend Development</h3>
              <h5>
                Dengan NodeJS dan kerangka kerja ExpressJS, saya mengkhususkan
                diri dalam menciptakan solusi backend yang efisien dan powerful,
                mendorong fungsionalitas mulus pada berbagai platform web.
              </h5>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
