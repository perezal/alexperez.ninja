import React from "react";
import { Link } from "react-router";


export default class Gallery extends React.Component {

  constructor() {
    super();

    this.state = {
      dirtyfingers: false,
      taraska: false,
      trimet: false,
      gtfs: false
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

    const showcases = document.querySelectorAll(".showcase");

    showcases.forEach(function(el) {
      const rect = el.getBoundingClientRect();

      if (rect.top < innerHeightOffset){

        var stateObject = {};
        stateObject[el.id] = true;
        
        _this.setState(stateObject);
      }

    });

  }

  render() {

    const dfPopIn = this.state.dirtyfingers ? "pop-in" : "";
    const taraskaPopIn = this.state.taraska ? "pop-in" : "";
    const trimetPopIn = this.state.trimet ? "pop-in" : "";
    const gtfsPopIn = this.state.gtfs ? "pop-in" : "";

    return (
      <div className="gallery">
        <div className="row">
          <div className="col-md-6 col-xs-12 showcase-col-fix">
            <div id="dirtyfingers" className={"showcase left " + dfPopIn}>
              <Link to="/portfolio/dirtyfingers">
                <span className="title">Dirty Fingers Bikes</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 showcase-col-fix">
            <div id="taraska" className={"showcase right " + taraskaPopIn}>
              <Link to="/portfolio/taraskalab">
                <span className="title">The Taraska Lab</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 showcase-col-fix">
            <div id="trimet" className={"showcase left " + trimetPopIn}>
              <Link to="/portfolio/trimet">
                <span className="title">Trimet App for Ninjas</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 showcase-col-fix">
            <div id="gtfs" className={"showcase right " + gtfsPopIn}>
              <Link to="/portfolio/gtfs">
                <span className="title">GTFS.org</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
