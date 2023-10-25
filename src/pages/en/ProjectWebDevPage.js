import React, { Component } from 'react';
import Header from '../../parts/en/Header';
import Footer from '../../parts/en/Footer';

export default class ProjectWebDevPage extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}></Header>
        <h2>Web Development</h2>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        <div
          style={{
            borderBottom: '1px solid black',
          }}
        ></div>
        <div className="row">
          <div className="col-3">
            <img
              src="https://picsum.photos/500/500"
              alt=""
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-6">
            <div className="row m-0">
              <h4>Indonesia News Curator</h4>
              <img src="https://picsum.photos/32/32" alt="" />
              <img src="https://picsum.photos/100/32" alt="" />
            </div>
            <h5>
              This website can assess news article similarity based on your
              desired keywords and employs Latent Semantic Analysis as a text
              mining method to reduce errors in news retrieval due to search
              result discrepancies.
            </h5>
            <div className="row">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  View in Github{' '}
                  <img src="https://picsum.photos/32/32" alt="" />
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ width: '100%' }}
                >
                  View Project{' '}
                  <img src="https://picsum.photos/32/32" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
        <Footer {...this.props}></Footer>
      </div>
    );
  }
}
