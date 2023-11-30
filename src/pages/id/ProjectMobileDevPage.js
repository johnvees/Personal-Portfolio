import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../../parts/id/Header';
import Footer from '../../parts/id/Footer';
import ilMobileProject1 from '../../assets/images/ilMobileProject1.webp';
import ilMobileProject2 from '../../assets/images/ilMobileProject2.webp';
import ilMobileProject3 from '../../assets/images/ilMobileProject3.webp';
import icGithub from '../../assets/images/iconGithub.svg';
import icArrowGoUp from '../../assets/images/iconArrowGoUp.svg';
import icPolygonLeft from '../../assets/images/icPolygonLeft.svg';
import icPolygonRight from '../../assets/images/icPolygonRight.svg';
import icReact from '../../assets/images/icReact.svg';
import icRedux from '../../assets/images/icRedux.svg';
import icFirebase from '../../assets/images/icFirebase.svg';
import icJava from '../../assets/images/icJava.svg';
import icSQLite from '../../assets/images/icSQLite.svg';
import icAndroid from '../../assets/images/icAndroid.svg';
 
export default function ProjectMobileDevPage() {
  const projectList = [
    {
      id: 4,
      projectTitle: 'Second Hand App',
      projectDesc:
        'Aplikasi ini berfungsi sebagai market place, khususnya untuk barang bekas. Platform ini menawarkan berbagai kategori kebutuhan, memungkinkan pengguna yang mendaftar di aplikasi untuk berperan sebagai penjual dan pembeli menggunakan satu akun. Platform ini memfasilitasi hubungan antara penjual dan pembeli, memungkinkan mereka untuk bernegosiasi mengenai barang dan melakukan transaksi secara langsung di luar platform',
      projectCategory: 'Mobile Development',
      projectBanner: ilMobileProject1,
      projectLink: '',
      githubLink: 'https://github.com/johnvees/FinalProject-SecondHand',
      startDate: '2022-06-12',
      endDate: '2022-07-26',
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
          id: 4,
          name: 'Firebase',
          image: icFirebase,
        },
      ],
    },
    {
      id: 5,
      projectTitle: 'Money Saving',
      projectDesc:
        'Money Saving adalah aplikasi manajemen keuangan yang dirancang untuk menyederhanakan pencatatan transaksi keuangan harian. Dengan melakukan pencatatan keuangan harian secara digital, pengguna dapat mengelola dan memantau pengeluaran dan pendapatan keuangan harian mereka dengan efisien. Semua entri akan dicatat dengan akurat, memberikan gambaran komprehensif, termasuk total jumlah dan perbandingan persentase',
      projectCategory: 'Mobile Development',
      projectBanner: ilMobileProject2,
      projectLink: '',
      githubLink: 'https://github.com/johnvees/MoneySaving',
      startDate: '2022-07-22',
      endDate: '2021-07-04',
      techStack: [
        {
          id: 5,
          name: 'Java',
          image: icJava,
        },
        {
          id: 6,
          name: 'SQLite',
          image: icSQLite,
        },
        {
          id: 7,
          name: 'Android',
          image: icAndroid,
        },
      ],
    },
    {
      id: 6,
      projectTitle: 'My Doctor',
      projectDesc: `Aplikasi ini adalah aplikasi Konsultasi Dokter Online. Mengingat banyaknya masalah kesehatan di masyarakat dan upaya untuk meminimalkan waktu dan biaya, banyak individu memilih opsi instan untuk berkonsultasi langsung dengan dokter bersertifikat melalui sarana online`,
      projectCategory: 'Mobile Development',
      projectBanner: ilMobileProject3,
      projectLink: '',
      githubLink: 'https://github.com/johnvees/HiDoc',
      startDate: '2021-03-22',
      endDate: '2021-12-24',
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
          id: 4,
          name: 'Firebase',
          image: icFirebase,
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
            <h2>Proyek Mobile Development</h2>
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
                              Lihat di Github{' '}
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
