import React from "react";

const Figma = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">My Figma Designs</h2>

      <div className="row g-5">
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig1.png"
            alt="Figma 1"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig2.png"
            alt="Figma 2"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig3.png"
            alt="Figma 3"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig4.png"
            alt="Figma 4"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig5.png"
            alt="Figma 5"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <img
            src="./fig7.png"
            alt="Figma 7"
            className="img-fluid rounded shadow-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="./fig6.png"
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
