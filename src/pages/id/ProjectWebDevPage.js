import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../../parts/id/Header';
import Footer from '../../parts/id/Footer';
import ilWebProject1 from '../../assets/images/ilWebProject1.webp';
import ilWebProject2 from '../../assets/images/ilWebProject2.webp';
import ilWebProject3 from '../../assets/images/ilWebProject3.webp';
import icGithub from '../../assets/images/iconGithub.svg';
import icArrowGoUp from '../../assets/images/iconArrowGoUp.svg';
import icReact from '../../assets/images/icReact.svg';
import icRedux from '../../assets/images/icRedux.svg';
import icSass from '../../assets/images/icSass.svg';
import icPolygonLeft from '../../assets/images/icPolygonLeft.svg';
import icPolygonRight from '../../assets/images/icPolygonRight.svg';

export default function ProjectWebDevPage() {
  const projectList = [
    {
      id: 1,
      projectTitle: 'Indonesia News Curator',
      projectDesc:
        'Proyek ini memanfaatkan Latent Semantic Analysis untuk mengukur kemiripan berita, menyaring berita yang relevan, dan mencegah kesalahan dalam pencarian berita dengan kata kunci dan topik terkait',
      projectCategory: 'Web Development',
      projectBanner: ilWebProject1,
      projectLink: 'https://ta-berita.vercel.app/',
      githubLink: 'https://github.com/johnvees/TA-Berita',
      startDate: '2023-05-14',
      endDate: '2023-07-09',
      techStack: [
        {
          id: 1,
          name: 'React',
          image: icReact,
        },
        {
          id: 2,
          name: 'Redux',
          image: icRedux,
        },
        {
          id: 3,
          name: 'Sass',
          image: icSass,
        },
      ],
    },
    {
      id: 2,
      projectTitle: 'PT. Weba International Company Profile',
      projectDesc: `Website ini dirancang untuk kebutuhan PT. Weba International, mencakup profil perusahaan dan katalog produk. Dengan desain responsif, antarmuka intuitif, dan integrasi visual yang menarik, ini memperkuat kehadiran online perusahaan`,
      projectCategory: 'Web Development',
      projectBanner: ilWebProject2,
      projectLink: '',
      githubLink: 'https://github.com/johnvees/WEBA-CompanyProfile',
      startDate: '2022-05-15',
      endDate: '2022-07-08',
      techStack: [
        {
          id: 1,
          name: 'React',
          image: icReact,
        },
        {
          id: 2,
          name: 'Redux',
          image: icRedux,
        },
        {
          id: 3,
          name: 'Sass',
          image: icSass,
        },
      ],
    },
    {
      id: 3,
      projectTitle: 'Staycation',
      projectDesc:
        'Proyek ini berasal dari kursus online saya, website ini ditujukan untuk memesan hotel, vila, dan lainnya bagi semua orang untuk memenuhi kebahagiaan akhir pekan mereka dengan mudah',
      projectCategory: 'Web Development',
      projectBanner: ilWebProject3,
      projectLink: '',
      githubLink: 'https://github.com/johnvees/Staycation-MERN',
      startDate: '2022-02-20',
      endDate: '2022-05-27',
      techStack: [
        {
          id: 1,
          name: 'React',
          image: icReact,
        },
        {
          id: 2,
          name: 'Redux',
          image: icRedux,
        },
        {
          id: 3,
          name: 'Sass',
          image: icSass,
        },
      ],
    },
  ];

  // Step 1: Extract the years from the endDate of each project
  const years = projectList.map((project) =>
    new Date(project.endDate).getFullYear()
  );

  // Step 2: Filter out duplicate years
  const uniqueYears = Array.from(new Set(years));
  const sortedYears = [...uniqueYears].sort((a, b) => a - b);

  // Step 3: Find the latest year
  const latestYear = Math.max(...uniqueYears);
  const earliestYear = Math.min(...uniqueYears);

  // Step 4: Set the initial clickedYear state to the latest year
  const [clickedYear, setClickedYear] = useState(latestYear);

  const handleYearClick = (year) => {
    console.log(`Clicked on year: ${year}`);
    setClickedYear(year);
    // Add your desired action here, e.g. navigate to a different page
  };

  const handleYearBefore = () => {
    if (clickedYear !== earliestYear) {
      const yearBefore = clickedYear - 1;
      setClickedYear(yearBefore);
    }
  };

  const handleYearNext = () => {
    if (clickedYear !== latestYear) {
      const yearAfter = clickedYear + 1;
      setClickedYear(yearAfter);
    }
  };

  return (
    <div>
      <Header></Header>
      <section className="container-project pt-5 pb-5">
        <Fade bottom cascade>
          <div className="text-center mb-4">
            <h2>Proyek Web Development</h2>
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="row justify-content-center align-items-center mb-5 m-0">
            <div
              className={`mr-auto ${
                clickedYear === earliestYear ? 'disabled' : 'allowed'
              }`}
              onClick={() => handleYearBefore()}
            >
              <img src={icPolygonLeft} alt="Icon Before" />
            </div>
            {sortedYears.map((year) => (
              <div
                key={year}
                onClick={() => handleYearClick(year)}
                style={{
                  cursor: 'pointer',
                  marginRight: '24px',
                  marginLeft: '24px',
                  color: clickedYear === year ? '#0740AD' : '#707071',
                  textDecoration: clickedYear === year ? 'underline' : 'none',
                  fontSize: '32px',
                  fontFamily: 'Gilroy-Bold',
                }}
              >
                {year}
              </div>
            ))}
            <div
              className={`ml-auto ${
                clickedYear === latestYear ? 'disabled' : 'allowed'
              }`}
              onClick={() => handleYearNext()}
            >
              <img src={icPolygonRight} alt="Icon Next" />
            </div>
          </div>
        </Fade>
        {/* Display projects for the clicked year */}
        {projectList
          .filter(
            (project) => new Date(project.endDate).getFullYear() === clickedYear
          )
          .map((project, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <Fade left cascade>
                  <div className="row mb-4">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                      <img
                        className="mb-3"
                        src={project.projectBanner}
                        alt={project.title}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="row m-0 mb-2 align-items-center">
                        <h4>{project.projectTitle}</h4>
                        {project.techStack.map((techItem) => (
                          <img
                            key={techItem.id}
                            src={techItem.image}
                            alt={techItem.name}
                          />
                        ))}
                      </div>
                      <h5 className="mb-2">{project.projectDesc}</h5>
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ width: '100%' }}
                            >
                              Lihat di Github{' '}
                              <img src={icGithub} alt="Github Icon" />
                            </button>
                          </a>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
                          {/* Conditionally render the button based on project.projectLink length */}
                          {project.projectLink.length > 0 ? (
                            <a
                              href={project.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                type="button"
                                className="btn btn-warning"
                                style={{ width: '100%' }}
                              >
                                Lihat Project{' '}
                                <img src={icArrowGoUp} alt="Arrow Go Up Icon" />
                              </button>
                            </a>
                          ) : (
                            // If project.projectLink length is 0, render a disabled button
                            <button
                              type="button"
                              className="btn btn-warning"
                              style={{ width: '100%' }}
                              disabled
                            >
                              Lihat Project{' '}
                              <img src={icArrowGoUp} alt="Arrow Go Up Icon" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </Fade>
              ) : (
                <Fade right cascade>
                  <div className="row mb-4 justify-content-end">
                    <div className="col-3"></div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="row m-0 justify-content-end align-items-center mb-2">
                        {project.techStack.map((techItem) => (
                          <img
                            key={techItem.id}
                            src={techItem.image}
                            alt={techItem.name}
                          />
                        ))}
                        <h4 className="mb-2" style={{ textAlign: 'end' }}>
                          {project.projectTitle}
                        </h4>
                      </div>
                      <h5 style={{ textAlign: 'end' }}>
                        {project.projectDesc}
                      </h5>
                      <div className="row">
                        <div className="col-4"></div>
                        <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
                          {/* Conditionally render the button based on project.projectLink length */}
                          {project.projectLink.length > 0 ? (
                            <a
                              href={project.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                type="button"
                                className="btn btn-warning"
                                style={{ width: '100%' }}
                              >
                                Lihat Project{' '}
                                <img src={icArrowGoUp} alt="Arrow Go Up Icon" />
                              </button>
                            </a>
                          ) : (
                            // If project.projectLink length is 0, render a disabled button
                            <button
                              type="button"
                              className="btn btn-warning"
                              style={{ width: '100%' }}
                              disabled
                            >
                              Lihat Project{' '}
                              <img src={icArrowGoUp} alt="Arrow Go Up Icon" />
                            </button>
                          )}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ width: '100%' }}
                            >
                              View di Github{' '}
                              <img src={icGithub} alt="Github Icon" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                      <img
                        className="mb-3"
                        src={project.projectBanner}
                        alt={project.title}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </Fade>
              )}
            </div>
          ))}
      </section>
      <Footer></Footer>
    </div>
  );
}
