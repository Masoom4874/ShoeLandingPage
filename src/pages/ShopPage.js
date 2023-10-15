import React from "react";
import bgimg1 from "../assets/bgimg1.avif";
import shoeimg1 from "../assets/shoeimg1.webp";

const ShopPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{
        height: "100vh",
        backgroundImage: `url(${bgimg1})`, // Replace with your image URL
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center", // Adjust as needed
      }}
    >
      <div className="py-1 d-flex align-items-center justify-content-between w-70 h-100 container-fluid gap-2">
        <div className="scrollable-cards-2 gap-5">
          <div className="card border-0 " style={{ width: "30%" }}>
            <img src={shoeimg1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Nike Running Shoe</h5>
              <h4 className="card-title text-primary">Starting from $222</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="card border-0 " style={{ width: "30%" }}>
            <img src={shoeimg1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Nike Running Shoe</h5>
              <h4 className="card-title text-primary">Starting from $222</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>{" "}
          <div className="card border-0 " style={{ width: "30%" }}>
            <img src={shoeimg1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Nike Running Shoe</h5>
              <h4 className="card-title text-primary">Starting from $222</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>{" "}
          <div className="card border-0 " style={{ width: "30%" }}>
            <img src={shoeimg1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Nike Running Shoe</h5>
              <h4 className="card-title text-primary">Starting from $222</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>{" "}
          <div className="card border-0 " style={{ width: "30%" }}>
            <img src={shoeimg1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Nike Running Shoe</h5>
              <h4 className="card-title text-primary">Starting from $222</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
