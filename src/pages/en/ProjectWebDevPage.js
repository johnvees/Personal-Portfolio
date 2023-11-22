import React, { useState } from 'react';
import Header from '../../parts/en/Header';
import Footer from '../../parts/en/Footer';
import ilWebProject1 from '../../../src/assets/images/ilWebProject1.webp';
import ilWebProject2 from '../../../src/assets/images/ilWebProject2.webp';
import ilWebProject3 from '../../../src/assets/images/ilWebProject3.webp';
import icGithub from '../../../src/assets/images/iconGithub.svg';
import icArrowGoUp from '../../../src/assets/images/iconArrowGoUp.svg';

export default function ProjectWebDevPage() {
  const projectList = [
    {
      id: 1,
      projectTitle: 'Indonesia News Curator',
      projectDesc:
        'This project is for my thesis project about curate Indonesian News using Latent Semantic Analysis',
      projectCategory: 'Web Development',
      projectBanner: ilWebProject1,
      projectLink: 'https://ta-berita.vercel.app/',
      githubLink: 'https://github.com/johnvees/TA-Berita',
      startDate: '2023-05-14',
      endDate: '2023-07-09',
      techStack: [
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
      ],
    },
    {
      id: 2,
      projectTitle: 'Indonesia News Curator',
      projectDesc:
        'This project is for my thesis project about curate Indonesian News using Latent Semantic Analysis',
      projectCategory: 'Web Development',
      projectBanner: ilWebProject2,
      projectLink: 'https://ta-berita.vercel.app/',
      githubLink: 'https://github.com/johnvees/TA-Berita',
      startDate: '2022-05-14',
      endDate: '2022-07-09',
      techStack: [
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
      ],
    },
    {
      id: 3,
      projectTitle: 'Indonesia News Curator2',
      projectDesc:
        'This project is for my thesis project about curate Indonesian News using Latent Semantic Analysis',
      projectCategory: 'Web Development',
      projectBanner: ilWebProject3,
      projectLink: 'https://ta-berita.vercel.app/',
      githubLink: 'https://github.com/johnvees/TA-Berita',
      startDate: '2022-05-14',
      endDate: '2022-07-09',
      techStack: [
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
        },
        {
          id: 1,
          name: 'MongoDB',
          image: icGithub,
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

  // Step 4: Set the initial clickedYear state to the latest year
  const [clickedYear, setClickedYear] = useState(latestYear);

  const handleYearClick = (year) => {
    console.log(`Clicked on year: ${year}`);
    setClickedYear(year);
    // Add your desired action here, e.g. navigate to a different page
  };

  return (
    <div>
      <Header></Header>
      <section className="container-project web pt-5 pb-5">
        <div className="text-center mb-4">
          <h2>Web Development</h2>
        </div>
        <div className="row justify-content-center mb-5">
          {sortedYears.map((year) => (
            <div
              key={year}
              onClick={() => handleYearClick(year)}
              style={{
                cursor: 'pointer',
                margin: '5px',
                color: clickedYear === year ? 'yellow' : 'gray',
                textDecoration: clickedYear === year ? 'underline' : 'none',
              }}
            >
              {year}
            </div>
          ))}
        </div>
        {/* Display projects for the clicked year */}
        {projectList
          .filter(
            (project) => new Date(project.endDate).getFullYear() === clickedYear
          )
          .map((project) => (
            <div className="row mb-4">
              <div className="col-sm-12 col-md-12 col-lg-3">
                <img
                  src={project.projectBanner}
                  alt={project.title}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="col-6">
                <div className="row m-0">
                  <h4>{project.projectTitle}</h4>
                  {project.techStack.map((techItem) => (
                    <img
                      key={techItem.id}
                      src={techItem.image}
                      alt={techItem.name}
                    />
                  ))}
                </div>
                <h5>{project.projectDesc}</h5>
                <div className="row">
                  <div className="col-4">
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
                        View in Github <img src={icGithub} alt="Github Icon" />
                      </button>
                    </a>
                  </div>
                  <div className="col-4">
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
                        View Project{' '}
                        <img src={icArrowGoUp} alt="Arrow Go Up Icon" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          ))}
      </section>
      <Footer></Footer>
    </div>
  );
}
