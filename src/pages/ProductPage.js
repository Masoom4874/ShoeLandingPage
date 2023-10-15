import React, { useRef } from "react";
import shoeimg1 from "../assets/shoeimg1.png";
import shoeimg2 from "../assets/shoeimg2.avif";
import shoeimg3 from "../assets/shoeimg3.webp";
import shoeimg4 from "../assets/shoeimg4.avif";

const ProductPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ height: "100vh" }}
    >
      <div
        className="py-1 d-flex align-items-center justify-content-between w-70 h-100 container-fluid gap-2"
        style={{ paddingLeft: "5vw" }}
      >
        <div style={{ width: "15%" }}>
          <h2 className="text-secondary mb-3" style={{ fontSize: "2.5rem" }}>
            Our Latest Products
          </h2>
          <h4 className="text-success fw-normal mb-5">Shop the latest</h4>
          <button
            type="button"
            class="btn btn-light w-100 py-3 fw-semibold shadow bg-body-tertiary"
          >
            All Products
          </button>
        </div>
        <div
          style={{ width: "70%" }}
          className="d-flex justify-content-between"
        >
          <div className="scrollable-cards gap-5">
            <div className="card border-0 " style={{ width: "30%" }}>
              <img src={shoeimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nike AirMax Pro Runners</h5>
                <p className="card-text">
                  Unmatched cushioning and lightweight support for your daily
                  runs.
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div
              className="card border-0 shadow bg-body-tertiary"
              style={{ width: "30%" }}
            >
              <img src={shoeimg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nike FlexFit Street Sneakers</h5>
                <p className="card-text">
                  Stylish urban sneakers with all-day comfort and flexibility.
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="card border-0 " style={{ width: "30%" }}>
              <img src={shoeimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nike React Infinity Court Shoes</h5>
                <p className="card-text">
                  Supreme stability and cushioning for peak performance on the
                  court.
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="card border-0 " style={{ width: "30%" }}>
              <img src={shoeimg4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nike SwiftTrail Hiking Boots</h5>
                <p className="card-text">
                  Rugged waterproof boots for conquering the great outdoors.
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
