import React from 'react';

export default function Footer() {
  return (
    <section className="container-hero footer ">
      <div className="row pt-4">
        <div className="col-4 ">
          <h2>Connect With Me and Create Together!</h2>
        </div>
        <div className="col-3"></div>
        <div className="col-5">
          <div className="row">
            <div className="col-5">
              <a href="">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>LinkedIn</h5>
                </div>
              </a>
              <a href="">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>Github</h5>
                </div>
              </a>
              <a href="">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>Instagram</h5>
                </div>
              </a>
            </div>
            <div className="col-7">
              <a href="mailto:yohanesvelly23@gmail.com">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>yohanesvelly23@gmail.com</h5>
                </div>
              </a>
              <a href="tel:+62895325754494">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>+62895325754494</h5>
                </div>
              </a>
              <a href="">
                <div className="row align-items-center mb-2">
                  <img
                    src="https://picsum.photos/32/32"
                    alt=""
                    className="mr-3"
                  />
                  <h5 style={{ margin: '0px' }}>Whatsapp</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>© Yohanes Velly Sabattino. All rights reserved 2023</p>
      </div>
    </section>
  );
}
