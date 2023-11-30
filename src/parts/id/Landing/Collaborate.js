import React from 'react';
import ILBlobTop from '../../../assets/images/ilCollaborateTop.webp';
import ILBlobBottom from '../../../assets/images/ilCollaborateBottom.webp';
import Fade from 'react-reveal/Fade';

export default function Collaborate() {
  return (
    <section className="container-landing collaborate">
      <Fade left cascade>
        <img
          src={ILBlobTop}
          alt="Blob Illustration Collaborate"
          style={{ maxWidth: '100px' }}
        />
      </Fade>
      <Fade bottom cascade>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '55%',
          }}
        >
          <div className="text-center">
            <h1>
              Ubah Ide-ide Anda menjadi Keajaiban Digital. Mari Berkolaborasi
              dengan Saya untuk Kesuksesan!
            </h1>
            <div className="row align-items-center mt-4">
              <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block"></div>
              <div className="col-sm-8 col-md-8 col-lg-8">
                <a
                  href="https://wa.me/+62895325754494?text=I%20interested%20with%20your%20portfolio,%20can%20i%20catch%20up%20with%20you?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Hubungi Saya!
                  </button>
                </a>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="row" style={{ marginRight: '0px' }}>
          <div className="ml-auto">
            <img
              src={ILBlobBottom}
              alt="Blob Illustration Collaborate"
              style={{ maxWidth: '100px' }}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
}
