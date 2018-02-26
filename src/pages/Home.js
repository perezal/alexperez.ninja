import React from "react";

import Banner from "../components/Banner";
import Callouts from "../components/Callouts";
import Chevron from "../components/Chevron";

export default class Home extends React.Component {

  render() {

    const headline = "Custom-built, responsive websites";

    return (
      <div className="home-page">
        <Banner headline={headline} />
        <Chevron />
        <div className="page-body">
          <Callouts />
        </div>
      </div>
    );
  }
}
