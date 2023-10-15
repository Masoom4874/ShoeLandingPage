import React from "react";
import bgimg1 from "../assets/bgimg1.avif";

const FeaturePage = () => {
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
      <div
        className="py-1 d-flex align-items-center justify-content-between w-70 h-100 container-fluid gap-2"
        style={{ paddingLeft: "5vw" }}
      ></div>
    </div>
  );
};

export default FeaturePage;
