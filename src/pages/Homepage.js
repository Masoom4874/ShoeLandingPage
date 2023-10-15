import React from "react";
import shoeimg1 from "../assets/shoeimg1.png";
import { BsArrowRightCircle } from "react-icons/bs";

const Homepage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{
        height: "100vh",
        paddingTop: "15vh",
        background:
          "linear-gradient(to right, #86daf6, #4cc166)" /* Adjust colors as needed */,
      }}
    >
      <div className="py-1 d-flex align-items-center justify-content-between w-70 h-100 container-fluid gap-2">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide w-100 h-100"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "85vh" }}
              >
                <div style={{ width: "50%" }}>
                  {" "}
                  <h4 className="mb-5">Streetwear as per your outfit</h4>
                  <h1 className="text-light" style={{ fontSize: "3rem" }}>
                    Representing the best
                  </h1>
                  <h1 className="text-light mb-5" style={{ fontSize: "3rem" }}>
                    combination for your outfit
                  </h1>
                  <button type="button" class="btn btn-outline-light">
                    EXPLORE
                  </button>
                </div>
                <div>
                  <img src={shoeimg1} alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "85vh" }}
              >
                <div style={{ width: "50%" }}>
                  {" "}
                  <h4 className="mb-5">Streetwear as per your outfit</h4>
                  <h1 className="text-light" style={{ fontSize: "3rem" }}>
                    Representing the best
                  </h1>
                  <h1 className="text-light mb-5" style={{ fontSize: "3rem" }}>
                    combination for your outfit
                  </h1>
                  <button type="button" class="btn btn-outline-light">
                    EXPLORE
                  </button>
                </div>
                <div>
                  <img src={shoeimg1} alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "85vh" }}
              >
                <div style={{ width: "50%" }}>
                  {" "}
                  <h4 className="mb-5">Streetwear as per your outfit</h4>
                  <h1 className="text-light" style={{ fontSize: "3rem" }}>
                    Representing the best
                  </h1>
                  <h1 className="text-light mb-5" style={{ fontSize: "3rem" }}>
                    combination for your outfit
                  </h1>
                  <button type="button" class="btn btn-outline-light">
                    EXPLORE
                  </button>
                </div>
                <div>
                  <img src={shoeimg1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

//  <div style={{ width: "50%" }}>
// {" "}
// <h4 className="mb-5">Streetwear as per your outfit</h4>
// <h1 className="text-light" style={{ fontSize: "3rem" }}>
//   Representing the best
// </h1>
// <h1 className="text-light mb-5" style={{ fontSize: "3rem" }}>
//   combination for your outfit
// </h1>
// <button type="button" class="btn btn-outline-light">
//   EXPLORE
// </button>
// </div>
// <div style={{ width: "50%" }}>
// <img src={shoeimg1} alt="" />
// </div>
// <button
// className="border-0 bg-transparent"
// style={{ width: "10%", fontSize: "4rem" }}
// >
// <BsArrowRightCircle className="text-light" />
// </button>
