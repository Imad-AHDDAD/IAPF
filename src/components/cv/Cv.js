import React from "react";
import Navbar from "../../common/navbar/Navbar";
import cv from "../../documents/imad-as-developer-cv.pdf"

function Cv() {
  return (
    <>
      <Navbar navStyle="withBackground" profile="developer" />
      <div className="contact-section cv-section">
        <iframe
          title="imad-as-developer-cv"
          src={cv}
          className="pdfViewer"
        />
      </div>
    </>
  );
}

export default Cv;
