import React from "react";
import { IndexLink, Link } from "react-router";

import SiteTitle from "./SiteTitle.js";

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  collapseMenu() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    
    const { location } = this.props;
    const { collapsed } = this.state;

    const homeClass = location.pathname === "/" ? "active" : "";
    const portfolioClass = location.pathname.match(/^\/portfolio/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";
    const mobileClass = collapsed ? "" : "open";

    return (
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <SiteTitle />
          </div>
          <div className="row">
            <div id="mobile-toggle" className={"navbar-toggle " + mobileClass} onClick={this.toggleCollapse.bind(this)}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </div>
          </div>
          <div className={"navbar-collapse " + navClass} id="the-navbar">
            <ul className="nav navbar-nav">
              <li className={"home-nav " + homeClass} onClick={this.collapseMenu.bind(this)}>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li className={"portfolio-nav " + portfolioClass} onClick={this.collapseMenu.bind(this)}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className={"about-nav " + aboutClass} onClick={this.collapseMenu.bind(this)}>
                <Link to="/about">About</Link>
              </li>
              <li className={"contact-nav " + contactClass} onClick={this.collapseMenu.bind(this)}>
                <Link to="/contact">Contact</Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
