import React from "react";
import Lottie from "lottie-react";
import headingimg from "../assets/headingimg.json";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-transparent py-4"
      style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}
    >
      <div className="container-fluid w-70" style={{ maxHeight: "10vh" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Lottie
            animationData={headingimg}
            style={{ maxHeight: "15vh", width: "8vw" }}
          />

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 my-custom-font-size gap-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
          <form className="d-flex gap-4">
            <button className="d-flex icon-button border-0 bg-transparent">
              <HiMiniShoppingCart style={{ fontSize: "3vh" }} />
            </button>
            <button className="d-flex icon-button border-0 bg-transparent">
              <AiOutlineSearch style={{ fontSize: "3vh" }} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
