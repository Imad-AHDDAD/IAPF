import React from "react";
import Navbar from "../../common/navbar/Navbar";
import PosterCard from "./PosterCard";

function Posters() {
  return (
    <div className="posters-section">
      <Navbar navStyle="noBackground" active="poster" profile="designer" />
      <h1 className="title">Posters</h1>
      <div className="cards-container">
        <PosterCard
          title="PIZZA POSTER"
          images={[
            require("../../images/designer/posters/pizza/2.png"),
            require("../../images/designer/posters/pizza/3.png"),
            require("../../images/designer/posters/pizza/4.png"),
            require("../../images/designer/posters/pizza/5.png"),
          ]}
        />
        <PosterCard
          title="MOROCCAN JELLABA"
          images={[
            require("../../images/designer/posters/jellaba/2.png"),
            require("../../images/designer/posters/jellaba/3.png"),
            require("../../images/designer/posters/jellaba/4.png"),
            require("../../images/designer/posters/jellaba/5.png"),
          ]}
        />
        <PosterCard
          title="Graphic Design"
          images={[
            require("../../images/designer/posters/graphicdesign/p2.png"),
            require("../../images/designer/posters/graphicdesign/p3.png"),
            require("../../images/designer/posters/graphicdesign/p4.png"),
            require("../../images/designer/posters/graphicdesign/p5.png"),
          ]}
        />
        <PosterCard
          title="Modern House"
          images={[
            require("../../images/designer/posters/modernhouse/2.png"),
            require("../../images/designer/posters/modernhouse/3.png"),
            require("../../images/designer/posters/modernhouse/4.png"),
            require("../../images/designer/posters/modernhouse/5.png"),
          ]}
        />
        <PosterCard
          title="Shoes Poster"
          images={[
            require("../../images/designer/posters/shoes/2.png"),
            require("../../images/designer/posters/shoes/3.png"),
            require("../../images/designer/posters/shoes/4.png"),
            require("../../images/designer/posters/shoes/5.png"),
          ]}
        />
        <PosterCard
          title="Integration FSTG"
          images={[
            require("../../images/designer/posters/integrationfstg/p-02.jpg"),
            require("../../images/designer/posters/integrationfstg/p-03.jpg"),
            require("../../images/designer/posters/integrationfstg/p-01.jpg"),
          ]}
        />
        <PosterCard
          title="Ceremony FSTG"
          images={[
            require("../../images/designer/posters/ceremonyfstg/s-01.jpg"),
            require("../../images/designer/posters/ceremonyfstg/s-02.jpg"),
          ]}
        />
        <PosterCard
          title="Portes Ouvertes FSTG"
          images={[
            require("../../images/designer/posters/portes/p-01.jpg"),
            require("../../images/designer/posters/portes/p-02.jpg"),
          ]}
        />
        <PosterCard
          title="Journées FSTG ENtreprises"
          images={[
            require("../../images/designer/posters/jfe/jfe-01.jpg"),
            require("../../images/designer/posters/jfe/jfe-02.jpg"),
          ]}
        />
        <PosterCard
          title="La Monethique | FSTG"
          images={[
            require("../../images/designer/posters/monetique/m.jpg"),
          ]}
        />
        <PosterCard
          title="IRISI CLUB ❤"
          images={[
            require("../../images/designer/posters/irisiclub/irisiclub-01.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-02.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-03.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-04.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-05.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-06.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-07.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-08.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-09.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-10.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-11.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-12.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-13.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-14.jpg"),
            require("../../images/designer/posters/irisiclub/irisiclub-15.jpg"),
          ]}
        />
      </div>
    </div>
  );
}

export default Posters;
