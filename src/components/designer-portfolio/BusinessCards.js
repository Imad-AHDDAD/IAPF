import React from "react";
import Navbar from "../../common/navbar/Navbar";
import PosterCard from "./PosterCard";

function BusinessCards() {
  return (
    <div className="posters-section">
      <Navbar navStyle="noBackground" active="bc" profile="designer" />
      <h1 className="title">Business Cards</h1>
      <div className="cards-container">
        <PosterCard
          title="argamnou"
          images={[require("../../images/designer/businesscards/argamnou/1.jpg")]}
        />
        <PosterCard
          title="avocate"
          images={[
            require("../../images/designer/businesscards/avocate/1.jpg"),
            require("../../images/designer/businesscards/avocate/2.jpg"),
        ]}
        />
        <PosterCard
          title="fournicasa"
          images={[
            require("../../images/designer/businesscards/fournicasa/1.jpg"),
        ]}
        />
        <PosterCard
          title="garage aabbas"
          images={[
            require("../../images/designer/businesscards/garageaabas/1.jpg"),
        ]}
        />
        <PosterCard
          title="imad ahddad"
          images={[
            require("../../images/designer/businesscards/imadahddad/1.jpg"),
        ]}
        />
        <PosterCard
          title="garage aabbas"
          images={[
            require("../../images/designer/businesscards/garageaabas/1.jpg"),
        ]}
        />
        <PosterCard
          title="oussan ameublement"
          images={[
            require("../../images/designer/businesscards/oussan/1.jpg"),
        ]}
        />
      </div>
    </div>
  );
}

export default BusinessCards;
