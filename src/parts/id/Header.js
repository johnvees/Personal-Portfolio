import React from 'react';
import { useLocation } from 'react-router-dom';
import LanguageHandler from '../../assets/images/changeLanguageButtonID.webp';
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
            <a href="/id">
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
              <li className={`nav-item${getNavLinkClass('/id')}`}>
                <a className="nav-link" href="/id">
                  Beranda
                </a>
              </li>
              <li className={`nav-item${getNavLinkClass('/id/about')}`}>
                <a className="nav-link" href="/id/about">
                  Tentang
                </a>
              </li>
              <li
                className={`nav-item${getNavLinkClass(
                  '/id/web-dev' || '/id/mobile-dev' || '/id/backend-dev'
                )} dropdown`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Project
                </a>
                <div className="dropdown-menu">
                  <a
                    className={`dropdown-item${getNavLinkClass(
                      '/id/mobile-dev'
                    )}`}
                    href="/id/mobile-dev"
                  >
                    Mobile Development
                  </a>
                  <a
                    className={`dropdown-item${getNavLinkClass('/id/web-dev')}`}
                    href="/id/web-dev"
                  >
                    Web Development
                  </a>
                  <a
                    className={`dropdown-item${getNavLinkClass(
                      '/id/backend-dev'
                    )}`}
                    href="/id/backend-dev"
                  >
                    Backend Development
                  </a>
                </div>
              </li>
              {/* <li className={`nav-item${getNavLinkClass('/id/contact')}`}>
                <a className="nav-link" href="/id?scrollTo=contact-section">
                  Hubungi Saya
                </a>
              </li> */}
            </ul>
            <div className="d-flex ml-auto">
              <div className="container-language p-0">
                <a href="/en">
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
