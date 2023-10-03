import React from 'react';
import { useLocation } from 'react-router-dom';

export default function HeaderTest() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? ' active' : '';
  };

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="" href="#">
            <img src="https://picsum.photos/110/60" alt="" />
          </a>
          <button
            className="navbar-toggler"
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
              <li className="nav-item dropdown">
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
                <a className="nav-link" href="/en/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex ml-auto">
              <a className="" href="#">
                <img src="https://picsum.photos/110/60" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
