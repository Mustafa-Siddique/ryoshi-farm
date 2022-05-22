import React from "react";
import {
  FaRedditAlien,
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from '../images/ryoshilogo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" /> &nbsp;
          <span>RYOSHI TOKEN</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Why Ryoshi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Moonmap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Audit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Goldpaper
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Bridge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Swap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Farm
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                NFT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Play Game
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="headerSocials" href="#">
                <FaRedditAlien />
              </a>
              <a className="headerSocials" href="#">
                <FaDiscord />
              </a>
              <a className="headerSocials" href="#">
                <FaTwitter />
              </a>
              <a className="headerSocials" href="#">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-warning">Connect</button>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
