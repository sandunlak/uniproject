import React from "react";
import { Link } from 'react-router-dom';


export  default function Header(){

    return (
      <div>
        <nav className="navbar" style={{ background: "black" }}>
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <a className="navbar-brand" href="#" style={{ color: "white",fontSize:36}}>
      <img
        src="/Assests/bid-master-logo-zip-file/png/logo-white.png"
        alt="Logo"
        width="130"
        height="134"
        className="d-inline-block align-text-center"
      />
      {/*Bid Master*/ }
    </a>
    <div
      className="d-flex mx-auto"
      style={{ flex: 1, maxWidth: "600px" }}
    >
      <button className="btn btn-outline-light me-2" type="button">
        <i className="bi bi-funnel"></i> {/* Bootstrap Icons filter funnel icon */}
      </button>
      <form className="d-flex" role="search" style={{ flex: 1 }}>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ width: "100%" }}
        />
        <button className="btn btn-outline-light ms-2" type="submit">
          Search
        </button>
      </form>
    </div>
    <div className="d-flex align-items-center" style={{ paddingRight: "15px" }}>
    <button className="btn btn-outline-light me-2" type="button">
        <i className="bi bi-heart"></i> {/* Bootstrap Icons heart icon */}
      </button>
      <button className="btn btn-outline-light me-2" type="button">
        Sign In
      </button>
      <button className="btn btn-outline-light" type="button">
        <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
      </button>
    </div>
  </div>
</nav>


            {/*page navigation bar */}

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="mx-auto">
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link"> Home </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Auctions" className="nav-link"> Auctions </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AuctionHouses" className="nav-link"> Auction Houses </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Category
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Antique Items
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Arts
                        </a>
                      </li>
                      
                      <li>
                        <a className="dropdown-item" href="#">
                          Collectibles
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}