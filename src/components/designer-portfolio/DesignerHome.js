import React from "react";
import Navbar from "../../common/navbar/Navbar";

function DesignerHome() {
  return (
    <div className="home-designer">
      <Navbar navStyle="noBackground" active="home" profile="designer" />
      <div className="content">
        <h4>Hello</h4>
        <p className="name">I am Imad AHDDAD</p>
        <p className="profile">An Amateur Graphic Designer</p>
      </div>
    </div>
  );
}

export default DesignerHome;
