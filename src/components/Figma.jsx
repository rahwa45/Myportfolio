import React from "react";

const Figma = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">My Figma Designs</h2>

      <div className="row g-5">
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig1.png" // Path to your image
            alt="Figma 1"
            className="img-fluid rounded shadow-lg"
            width={500} // Optional, to define the width
            height={300} // Optional, to define the height
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig2.png" // Path to your image
            alt="Figma 2"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig3.png" // Path to your image
            alt="Figma 3"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig4.png" // Path to your image
            alt="Figma 4"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig5.png" // Path to your image
            alt="Figma 5"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <img
            src="./fig7.png" // Path to your image
            alt="Figma 7"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig6.png" // Path to your image
            alt="Figma 6"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Figma;
