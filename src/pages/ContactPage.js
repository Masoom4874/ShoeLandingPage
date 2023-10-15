import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import bgimg2 from "../assets/bgimg2.avif";
import Lottie from "lottie-react";
import headingimg from "../assets/headingimg.json";

const ContactPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ height: "100vh" }}
    >
      <div className="py-1 d-flex align-items-center justify-content-between w-70 h-100 container-fluid gap-2">
        <div className="d-flex flex-column w-100">
          {" "}
          <div
            className="d-flex justify-content-center align-items-center flex-column mb-3"
            style={{
              width: "100%",
              height: "30vh",
              backgroundImage: `url(${bgimg2})`, // Replace with your image URL
              backgroundSize: "cover", // Adjust as needed
              backgroundPosition: "center",
              opacity: 0.9, // Adjust as needed
            }}
          >
            <h4 className="text-light">Subscribe Our Newsletter</h4>
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Email adress"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                SEND
              </button>
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mx-5"
            style={{ height: "30vh" }}
          >
            <div>
              <Lottie
                animationData={headingimg}
                style={{ maxHeight: "15vh", width: "8vw" }}
              />
              <h6>Lorem ipsum dolor sit</h6>
              <h6>Lorem ipsum dolor sit</h6>

              <h6 className="mt-5 mb-2">Follow Us</h6>
              <div className="d-flex gap-2">
                <AiFillInstagram style={{ fontSize: "1.8rem" }} />
                <AiFillLinkedin style={{ fontSize: "1.8rem" }} />
                <AiFillTwitterCircle style={{ fontSize: "1.8rem" }} />
                <AiFillFacebook style={{ fontSize: "1.8rem" }} />
              </div>
            </div>
            <div>
              <h5 className="mb-3">Products</h5>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="text-secondary"
              >
                {" "}
                <li>Suffered</li>
                <li>Ultration</li>
                <li>Injuected</li>
                <li>Word</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3">Customer</h5>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="text-secondary"
              >
                {" "}
                <li>Variation</li>
                <li>Passages</li>
                <li>majority</li>
                <li>Humour</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3">Explore</h5>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="text-secondary"
              >
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Belief</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
