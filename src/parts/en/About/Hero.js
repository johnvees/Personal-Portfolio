import React from 'react';

export default function Hero() {
  return (
    <section className="container-about hero">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <h1>Hi, I’m Yohanes Velly Sabattino</h1>
          <h5>
            I am a graduate of the year 2023 with a major in Bachelor of
            Information Systems from Dinamika University, also known as STIKOM
            Surabaya. I have a passion for the world of technology, particularly
            in mobile application development using React Native and web
            development with ReactJS and NodeJS. My passion is driven by a
            desire to create innovative and user-friendly digital solutions that
            can solve real-world problems. With a strong foundation in these
            technologies and a commitment to continuous learning, I am very
            enthusiastic about contributing my skills to the ever-evolving
            software development industry.
          </h5>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: '100%' }}
              >
                Contact via Email{' '}
                <img src="https://picsum.photos/32/32" alt="" />
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-warning"
                style={{ width: '100%' }}
              >
                Contact via Whatsapp{' '}
                <img src="https://picsum.photos/32/32" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-6">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <img
              className="img-fluid photo"
              src="https://picsum.photos/500/600"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
