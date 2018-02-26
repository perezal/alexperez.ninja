import React from "react";

export default class Taraska extends React.Component {

  render() {

    return (
      <div className="taraska-portfolio portfolio-subpage">
        <div className="wrapper">
          <div className="leader">
            <h2>The Taraska Lab</h2>
          <a href="https://taraskalab.nhlbi.nih.gov" target="_blank" rel="noopener noreferrer">
            <div id="taraska" className="huge-image">
            </div>
          </a>
          </div>
          <div className="description">
            <h2>Description</h2>
            <hr />
            <p>The Taraska Lab employs fluorescence techniques to study cellular systems. I wanted to emphasize the impressive fluorescence images they captured, as well as the beautiful art by <a href="https://en.wikipedia.org/wiki/David_Goodsell" target="_blank" rel="noopener noreferrer">Dr. David Goodsell</a>.</p>
            <p>Working with Dr. Taraska was fantastic. The simplicity of the website, abundance of vivid imagery, and the theme of fluorescence gave me a lot to work with and allowed me to play with various video and image techniques (many of which did not make it into production). I also built a custom Wordpress plugin to make the 'people' page easy to update with the arrivals and departures of staff.</p>
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
              <li>This project may be viewed at <a href="https://taraskalab.nhlbi.nih.gov" target="_blank" rel="noopener noreferrer">taraskalab.nhlbi.nih.gov</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
