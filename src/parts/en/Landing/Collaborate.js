import React, { useEffect } from 'react';
import ILBlobTop from '../../../assets/images/ilCollaborateTop.webp';
import ILBlobBottom from '../../../assets/images/ilCollaborateBottom.webp';

export default function Collaborate() {
  useEffect(() => {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');

    // Scroll to the target element if scrollTo is present
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);

      if (targetElement) {
        const offset = targetElement.offsetTop;

        window.scrollTo({
          top: offset,
          behavior: 'smooth', // Optional: Add smooth scrolling
        });
      }
    }
  }, []);

  return (
    <section className="container-landing collaborate" id="contact-section">
      <img
        src={ILBlobTop}
        alt="Blob Illustration Collaborate"
        style={{ maxWidth: '100px' }}
      />
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
            Transform Your Ideas into Digital Magic Lets Collaborate for
            Success!
          </h1>
          <div className="row align-items-center mt-4">
            <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block"></div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get In Touch With Me!
              </button>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block"></div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginRight: '0px' }}>
        <div className="ml-auto">
          <img
            src={ILBlobBottom}
            alt="Blob Illustration Collaborate"
            style={{ maxWidth: '100px' }}
          />
        </div>
      </div>
    </section>
  );
}
