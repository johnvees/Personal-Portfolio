import React from 'react';
import ILAboutPict from '../../../assets/images/aboutPictLanding.webp';
import Fade from 'react-reveal/Fade';

export default function About() {
  const handleDownloadID = () => {
    // Specify the URL of your existing PDF file
    const pdfUrl =
      'https://drive.google.com/u/0/uc?id=1lwcsZ_bYmBlDOxswp_3z4Hb91geejz9K&export=download';

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;

    // Specify the download attribute with the desired file name
    link.download = 'cvID.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  const handleDownloadEN = () => {
    // Specify the URL of your existing PDF file
    const pdfUrl =
      'https://drive.google.com/u/0/uc?id=1bXbPr9egxvd2zvWvCcmXB8HfxGBWbxDS&export=download';

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;

    // Specify the download attribute with the desired file name
    link.download = 'cvEN.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <section className="container-landing about">
      <div className="row align-items-center pt-5 pb-5">
        <Fade cascade>
          <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
            <img
              className="img-fluid"
              src={ILAboutPict}
              alt="Landing About Illustration"
            />
          </div>
        </Fade>
        <Fade right cascade>
          <div className="col-sm-6 col-md-8 col-lg-6">
            <h4 className="mb-2">ABOUT ME</h4>
            <h2 className="mb-2">
              Crafting Digital Excellence: Your Developer for Exceptional Result
            </h2>
            <h5 className="mb-3">
              As a developer, I specialize in crafting exceptional digital
              solutions with ReactJS and React Native, bringing creativity and
              meticulousness to every project. Let's collaborate to turn your
              vision into a digital reality that stands out in today's
              competitive landscape.
            </h5>
            <div className="container-project mb-2">
              <h6 className="title">5 Complete Project</h6>
              <h6>
                Including College Projects, Internship, Bootcamp, Online
                Courses, Coding events like Hacktoberfest, and etc.
              </h6>
            </div>
            <div className="container-experience mb-2">
              <h6 className="title">Fresh Graduate</h6>
              <h6>
                Project experience are from College Projects, Internship,
                Bootcamp, Online Courses, Coding events like Hacktoberfest, and
                etc.
              </h6>
            </div>
            <div className="row align-items-center justify-content-center ml-1 mr-1 mb-2">
              <div
                className="col-sm-3 col-md-3 col-lg-3 d-none d-md-block"
                style={{
                  borderBottom: '1px solid black',
                }}
              ></div>
              <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                <h6 className="info">Download my Curriculum Vitae, below</h6>
              </div>
              <div
                className="col-sm-3 col-md-3 col-lg-3 d-none d-md-block"
                style={{
                  borderBottom: '1px solid black',
                }}
              ></div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 mb-2">
                <button
                  className="btn btn-danger"
                  style={{ width: '100%' }}
                  onClick={handleDownloadEN}
                >
                  English Version
                </button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <button
                  className="btn btn-warning"
                  style={{ width: '100%' }}
                  onClick={handleDownloadID}
                >
                  Bahasa Version
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
