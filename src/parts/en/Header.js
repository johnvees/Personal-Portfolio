import React from 'react';
import { useLocation } from 'react-router-dom';
import LanguageHandler from '../../assets/images/changeLanguageButton.webp';
import LogoBlack from '../../assets/images/logoBlack.svg';

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? ' active' : '';
  };

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-lg p-0">
          <div className="container-logo">
            <a href="/en">
              <img src={LogoBlack} alt="" />
            </a>
          </div>

          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass('/en')}`}>
                <a className="nav-link" href="/en">
                  Home
                </a>
              </li>
              <li className={`nav-item${getNavLinkClass('/en/about')}`}>
                <a className="nav-link" href="/en/about">
                  About
                </a>
              </li>
              <li
                className={`nav-item${getNavLinkClass(
                  '/en/web-dev' || '/en/mobile-dev' || '/en/backend-dev'
                )} dropdown`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div className="dropdown-menu">
                  <a
                    className={`dropdown-item${getNavLinkClass(
                      '/en/mobile-dev'
                    )}`}
                    href="/en/mobile-dev"
                  >
                    Mobile Development
                  </a>
                  <a
                    className={`dropdown-item${getNavLinkClass('/en/web-dev')}`}
                    href="/en/web-dev"
                  >
                    Web Development
                  </a>
                  <a
                    className={`dropdown-item${getNavLinkClass(
                      '/en/backend-dev'
                    )}`}
                    href="/en/backend-dev"
                  >
                    Backend Development
                  </a>
                </div>
              </li>
              <li className={`nav-item${getNavLinkClass('/en/contact')}`}>
                <a className="nav-link" href="/en?scrollTo=contact-section">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex ml-auto">
              <div className="container-language p-0">
                <a href="/id">
                  <div className="button row align-items-center justify-content-center m-0 p-0">
                    <h5 className="m-0 mr-2">EN</h5>
                    <img src={LanguageHandler} alt="" />
                    <h5 className="m-0 ml-2">ID</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
