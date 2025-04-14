import React from "react";

const Figma = () => {
  const images = [
    "fig1.png",
    "fig2.png",
    "fig3.png",
    "fig4.png",
    "fig5.png",
    "fig7.png",
    "fig6.png",
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">My Figma Designs</h2>

      <div className="row g-5">
        {images.map((src, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <img
              src={`./${src}`}
              alt={`Figma ${index + 1}`}
              className="img-fluid rounded shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figma;
