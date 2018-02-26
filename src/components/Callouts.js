import React from "react";

import {Link} from "react-router";

export default class Callouts extends React.Component {

  constructor() {
    super();

    this.state = {
      build: false,
      repair: false,
      maintain: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const innerHeightOffset = window.innerHeight - 100;

    var _this = this;

    const callouts = document.querySelectorAll(".callout");

    callouts.forEach(function(el) {
      const rect = el.getBoundingClientRect();

      if (rect.top < innerHeightOffset){

        var stateObject = {};
        stateObject[el.id] = true;

        _this.setState(stateObject);
      }

    });

  }

  render() {

    const buildSlideIn = this.state.build ? "slide-in-down" : "";
    const repairSlideIn = this.state.repair ? "slide-in-down" : "";
    const maintainSlideIn = this.state.maintain ? "slide-in-down" : "";

    const buildP = "Your website, built-to-order. We'll go over your website needs and get you a tailor-fit.";
    const repairP = "Whether that little widget just isn't working right or your entire website is down, I can help.";
    const maintainP = "Theme updates. Plugin updates. Security maintenance. Let me handle the headache while you get back to business.";

    return(
      <div className="callouts">
        <div className="container">
          <h1 className="callouts-title">My Services</h1>
          <div id="build" className={"callout col-md-4 " + buildSlideIn}>
            <Link to="/contact"><div className="build callout-icon"></div></Link>
            <h3>Build</h3>
            <p>{buildP}</p>
          </div>
          <div id="repair" className={"callout col-md-4 " + repairSlideIn}>
            <Link to="/contact"><div className="repair callout-icon"></div></Link>
            <h3>Repair</h3>
            <p>{repairP}</p>
          </div>
          <div id="maintain" className={"callout col-md-4 " + maintainSlideIn}>
            <Link to="/contact"><div className="maintain callout-icon"></div></Link>
            <h3>Mayntain</h3>
            <p>{maintainP}</p>
          </div>
        </div>
      </div>
    )
  }
}
