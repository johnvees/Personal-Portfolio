import React from 'react';
import ILHeroPict from '../../../assets/images/heroPict.webp';
import ICEmail from '../../../assets/images/iconEmail.svg';
import ICWhatsappBlack from '../../../assets/images/iconWhatsappBlack.svg';
import Fade from 'react-reveal/Fade';

export default function Hero() {
  return (
    <section className="container-about hero">
      <div className="row align-items-center" style={{ height: '100%' }}>
        <div className="col-sm-12 col-md-8 col-lg-6">
          <Fade bottom cascade>
            <div>
              <h1 className="mb-3">Hi, Saya Yohanes Velly Sabattino</h1>
              <h5 className="mb-5">
                Saya merupakan lulusan tahun 2023 dengan gelar Sarjana Sistem Informasi
                dari Universitas Dinamika, yang juga dikenal sebagai STIKOM
                Surabaya. Saya memiliki passion di dunia teknologi, khususnya
                dalam pengembangan aplikasi mobile menggunakan React Native dan
                pengembangan web dengan ReactJS dan NodeJS. Passion saya
                didorong oleh keinginan untuk menciptakan solusi digital yang
                inovatif dan ramah pengguna yang dapat menyelesaikan masalah
                dunia nyata. Dengan dasar yang kuat dalam teknologi ini dan
                komitmen untuk terus belajar, saya sangat antusias untuk
                memberikan kontribusi keterampilan saya kepada industri
                pengembangan perangkat lunak yang selalu berkembang.
              </h5>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <a
                    href="mailto:yohanesvelly23@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn btn-danger"
                      style={{ width: '100%' }}
                    >
                      Hubungi via Email <img src={ICEmail} alt="" />
                    </button>
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <a
                    href="https://wa.me/+62895325754494?text=I%20interested%20with%20your%20portfolio,%20can%20i%20catch%20up%20with%20you?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn btn-warning"
                      style={{ width: '100%' }}
                    >
                      Hubungi via Whatsapp <img src={ICWhatsappBlack} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
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
