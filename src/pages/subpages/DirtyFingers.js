import React from "react";

export default class DirtyFingers extends React.Component {

  render() {

    return (
      <div className="df-portfolio portfolio-subpage">
        <div className="wrapper">
          <div className="leader">
            <h2>Dirty Fingers Bikes</h2>
            <a href="http://dirtyfingersbikes.com" target="_blank" rel="noopener noreferrer">
              <div id="dirtyfingers" className="huge-image">
              </div>
            </a>
          </div>
          <div className="description">
            <h2>Description</h2>
            <hr />
            <p>The Dirty Fingers Bike Shop prides itself on its community-building activities and its sense of humor. The page I designed reflected these qualities and maximized the impact of their brilliant photography. I preserved their signature orange color in the navigation hover elements and made extensive use of the logo, which adorns nearly every item in the shop.</p>
            <p>As my first web development project, it was a happy success. Learning new technologies and systems is among my favorite things to do, so I approached it with excitement and fervor. For me, this project started it all.</p>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            <p>A list of technologies used in this project.</p>
            <hr />
            <ul>
              <li>Wordpress</li>
              <li>Responsive Web Design</li>
              <li>HTML5/CSS3</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <hr />
            <ul>
              <li>This project may be viewed at <a href="http://dirtyfingersbikes.com" target="_blank" rel="noopener noreferrer">dirtyfingersbikes.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
