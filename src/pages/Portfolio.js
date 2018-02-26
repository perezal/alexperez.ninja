import React from "react";

import Gallery from "../components/portfolio/Gallery";
import Banner from "../components/Banner";

export default class Portfolio extends React.Component {



  render() {

    const headline = "Portfolio";

    return (
      <div className="portfolio-page">
        <Banner headline={headline} />
        <div className="page-body">
          <div className="container">
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}
