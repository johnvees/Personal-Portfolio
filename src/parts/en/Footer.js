import React from 'react';
import ICEmail from '../../assets/images/iconEmail.svg';
import ICTelp from '../../assets/images/iconTelp.svg';
import ICWhatsapp from '../../assets/images/iconWhatsapp.svg';
import ICGithub from '../../assets/images/iconGithub.svg';
import ICLinkedin from '../../assets/images/iconLinkedin.svg';
import ICInstagram from '../../assets/images/iconInstagram.svg';

export default function Footer() {
  return (
    <section className="container-landing footer ">
      <div className="row pt-4">
        <div className="col-sm-12 col-lg-4 mb-3">
          <h2>Connect With Me and Create Together!</h2>
        </div>
        <div className="col-sm-0 col-lg-3"></div>
        <div className="col-sm-12 col-lg-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <a href="https://www.linkedin.com/in/yohanesvelly/">
                <div className="row align-items-center ml-0 mb-2">
                  <img src={ICLinkedin} alt="LinkedIn Logo" className="mr-3" />
                  <h5 style={{ margin: '0px' }}>LinkedIn</h5>
                </div>
              </a>
              <a href="https://github.com/johnvees">
                <div className="row align-items-center ml-0 mb-2">
                  <img src={ICGithub} alt="Github Logo" className="mr-3" />
                  <h5 style={{ margin: '0px' }}>Github</h5>
                </div>
              </a>
              <a href="https://www.instagram.com/yohanesvelly/">
                <div className="row align-items-center ml-0 mb-2">
                  <img
                    src={ICInstagram}
                    alt="Instagram Logo"
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>Instagram</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7">
              <a href="mailto:yohanesvelly23@gmail.com">
                <div className="row align-items-center ml-0 mb-2">
                  <img src={ICEmail} alt="Email Logo" className="mr-3" />
                  <h5 style={{ margin: '0px' }}>yohanesvelly23@gmail.com</h5>
                </div>
              </a>
              <a href="tel:+62895325754494">
                <div className="row align-items-center ml-0 mb-2">
                  <img src={ICTelp} alt="Telp Logo" className="mr-3" />
                  <h5 style={{ margin: '0px' }}>+62895325754494</h5>
                </div>
              </a>
              <a href="https://wa.me/+62895325754494?text=I%20interested%20with%20your%20portfolio,%20can%20i%20catch%20up%20with%20you?">
                <div className="row align-items-center ml-0 mb-2">
                  <img src={ICWhatsapp} alt="Logo Whatsapp" className="mr-3" />
                  <h5 style={{ margin: '0px' }}>Whatsapp</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="m-0 pb-4">
          © Yohanes Velly Sabattino. All rights reserved 2023
        </p>
      </div>
    </section>
  );
}
