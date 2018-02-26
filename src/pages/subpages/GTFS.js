import React from "react";

export default class GTFS extends React.Component {

  render() {

    return (
      <div className="gtfs-portfolio portfolio-subpage">
        <div className="wrapper">
          <div className="leader">
            <h2>GTFS.org</h2>
            <a href="http://gtfs.org" target="_blank" rel="noopener noreferrer">
              <div id="gtfs" className="huge-image">
              </div>
            </a>
          </div>
          <div className="description">
            <h2>Description</h2>
            <hr />
            <p>The creation of GTFS.org involved a complex confluence of editable, trackable, and independent living documents and the static site generator Jekyll. The website was originally designed to display a "Best Practices" reference, but has been expanded to include three separate references - each in their own Github repository. Whenever a commit is pushed to the master branch of any of the documents or the site itself, CircleCI pulls all four repositories and redeploys the site.</p>
            <p>The beauty in this site is in its function: the reference itself changes over time, sometimes frequently, so it is critical that the deployed site matches the code base. If something new is added, very little, if any, effort is needed to maintain the website. Additionally, Amazon S3 Static hosting is used to minimize cost and eliminate server maintenance.</p>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            <p>A list of technologies used in this project.</p>
            <hr />
            <ul>
              <li>Jekyll/Liquid</li>
              <li>HTML5/CSS3/JS</li>
              <li>Github/CircleCI</li>
              <li>Amazon Web Services</li>
            </ul>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <hr />
            <ul>
              <li>This project may be viewed at <a href="http://gtfs.org" target="_blank" rel="noopener noreferrer">http://gtfs.org</a></li>
              <li>The associated git repos may be found <a href="https://github.com/itd-consortium/gtfs.org" target="_blank" rel="noopener noreferrer">here</a>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
