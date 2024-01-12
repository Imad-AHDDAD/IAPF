import React from "react";
import Navbar from "../../common/navbar/Navbar";
import PosterCard from "./PosterCard";

function Logos() {
  return (
    <div className="posters-section">
      <Navbar navStyle="noBackground" active="logo" profile="designer" />
      <h1 className="title">Logos</h1>
      <div className="cards-container">
        <PosterCard
          title="3DEDU LOGO"
          images={[require("../../images/designer/logos/3dedu/1.jpg")]}
        />
        <PosterCard
          title="Agile safety LOGO"
          images={[
            require("../../images/designer/logos/agilesafety/1.jpg"),
            require("../../images/designer/logos/agilesafety/2.jpg"),
        ]}
        />
        <PosterCard
          title="Argamnou LOGO"
          images={[
            require("../../images/designer/logos/argamnou/1.png"),
            require("../../images/designer/logos/argamnou/2.png"),
        ]}
        />
        <PosterCard
          title="Argan oumouss LOGO"
          images={[
            require("../../images/designer/logos/argan/1.png"),
            require("../../images/designer/logos/argan/2.png"),
            require("../../images/designer/logos/argan/3.png"),
        ]}
        />
        <PosterCard
          title="DecoratLux LOGO"
          images={[
            require("../../images/designer/logos/decoratlux/1.png"),
            require("../../images/designer/logos/decoratlux/2.png"),
            require("../../images/designer/logos/decoratlux/3.png"),
        ]}
        />
        <PosterCard
          title="fournicasa LOGO"
          images={[
            require("../../images/designer/logos/fournicasa/1.png"),
            require("../../images/designer/logos/fournicasa/2.png"),
            require("../../images/designer/logos/fournicasa/3.png"),
            require("../../images/designer/logos/fournicasa/4.png"),
        ]}
        />
        <PosterCard
          title="ignited culture LOGO"
          images={[
            require("../../images/designer/logos/ignitedculture/1.jpg"),
        ]}
        />
        <PosterCard
          title="megatrans LOGO"
          images={[
            require("../../images/designer/logos/megatrans/1.png"),
            require("../../images/designer/logos/megatrans/2.png"),
            require("../../images/designer/logos/megatrans/3.png"),
        ]}
        />
        <PosterCard
          title="pierce plumbing LOGO"
          images={[
            require("../../images/designer/logos/pierceplumbing/1.jpg"),
        ]}
        />
        <PosterCard
          title="Security IT LOGO"
          images={[
            require("../../images/designer/logos/securityit/1.jpg"),
            require("../../images/designer/logos/securityit/2.jpg"),
            require("../../images/designer/logos/securityit/3.jpg"),
        ]}
        />
      </div>
    </div>
  );
}

export default Logos;
