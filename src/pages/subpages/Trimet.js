import React from "react";

export default class Trimet extends React.Component {

  render() {

    const desc1 = "The Trimet App for Ninjas is my own child, and my first experience with web APIs, API mirrors, and ReactJS. React quickly became a favorite framework of mine, which is why alexperez.ninja was primarily built with it.";
    const desc2 = "I plan to implement map functionality for stop selection and bus tracking, as well as backend refinements that will make the data transfer more efficient. Sadly this website only gets my spare attention, but I do periodically update it as React and Javascript continue to evolve.";

    return (
      <div className="trimet-portfolio portfolio-subpage">
        <div className="wrapper">
          <div className="leader">
            <h2>Trimet App for Ninjas</h2>
            <a href="https://trimetapp.alexperez.ninja" target="_blank" rel="noopener noreferrer">
              <div id="trimet" className="huge-image">
              </div>
            </a>
          </div>
          <div className="description">
            <h2>Description</h2>
            <hr />
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            <p>A list of technologies used in this project.</p>
            <hr />
            <ul>
              <li>React/Redux</li>
              <li><a href="https://developer.trimet.org/" target="_blank" rel="noopener noreferrer">Trimet API</a></li>
              <li>HTML5/CSS3</li>
              <li>Python/Django Backend</li>
            </ul>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <hr />
            <ul>
              <li>This project may be viewed at <a href="https://trimetapp.alexperez.ninja" target="_blank" rel="noopener noreferrer">trimetapp.alexperez.ninja</a></li>
              <li>The source code may be viewed at <a href="https://github.com/perezal/TrimetApp" target="_blank" rel="noopener noreferrer">github.com/perezal/TrimetApp</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
