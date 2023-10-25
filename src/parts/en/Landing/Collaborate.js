import React from 'react';

export default function Collaborate() {
  return (
    <section className="container-landing collaborate">
      <img
        src="https://picsum.photos/200/170"
        alt=""
        style={{ maxWidth: '100%' }}
      />
      <div
        className=""
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1>
            Transform Your Ideas into Digital Magic Lets Collaborate for
            Success!
          </h1>
          <div className="row align-items-center mt-4">
            <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block"></div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <button
                type="button"
                className="btn btn-primary "
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
            src="https://picsum.photos/200/170"
            alt=""
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
