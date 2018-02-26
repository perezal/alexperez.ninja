import React from "react";

import { Link } from "react-router";

export default class Footer extends React.Component {

  render() {

    let year = new Date().getFullYear();

    return (
      <footer>
        <div className="underfooter">
        <div className="col-xs-6 footer-left">
          <div className="col-xs-12">
            <h4 style={{color: 'white', margin: '0'}}>Technologies</h4>
            <ul className="footer-list">
              <li>Wordpress</li>
              <li>Github Pages</li>
              <li>React</li>
              <li>Nexudus</li>
              <li>...and more</li>
            </ul>
          </div>
        </div>
        <div className="col-xs-6 footer-right">
          <h4><Link to="/contact">Connect</Link></h4>
          <ul className="footer-list">
            <li><a href="mailto:alex@alexperez.ninja">alex@alexperez.ninja</a></li>
            <li><a href="tel:2092003196">209.200.3196</a></li>
            <li><a href="https://github.com/perezal">GitHub</a></li>
          </ul>
          <p className="copyright">&copy; {year} Alex Perez</p>
        </div>
        </div>
      </footer>
    );
  }
}
