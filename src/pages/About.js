import React from "react";

import Banner from "../components/Banner"

import {Link} from "react-router"

import FacePic from "../images/portrait_150.png"

export default class About extends React.Component {

  render() {

    const headline = "Developer / Ninja";

    const portraitText = "I love everything technical, vegetable, animal, and mineral. Back in 2009, I graduated from Reed College with a degree in Chemistry. There I nurtured a delightful array of analytic and strategic abilities and creative inclinations that, over time, brought me to a happy career in web development. Here, on the internet, I have an endless supply of canvases and data with which to play. When not developing, I pursue an ever-broadening range of interests, including auto repair, cooking, hiking, camping, lifting, chess, armchair chemistry, and playing the guitar.";

    const theBeginning = "An explorer at heart, I began my programming career in Hood River, Oregon. I was inspired by the abundance of self-employed, self-made, happy people in Hood River, and so I founded my business on an embrace of a self-sufficient and non-corporate lifestyle. I find the freedom energizing, and it affords me the ability to work intimately and efficiently with clients to produce striking websites.";

    const theBeginning2 = "That being said, I also love working on a team. Teams provide a variety of input that can give a project an extra edge. There is often something to be learned while working as a group, as you are exposed to the new strategies, thoughts, and perspectives. I believe the best collaborations are spawned from a mix of group and solo work, where ideas can be shared, but the flair of individuality remains intact.";

    const workingWithMe = "I love working with people who are passionate about their pursuits. My goal is to turn that passion and enthusiasm into a website that gives your business a sharp and professional edge. I enjoy working closely with clients to ensure the project runs smoothly and efficiently. You'll find me amiable, accessible, and easily excited about a project.";

    const workingWithMe2 = "";

    return (
      <div className="about-page">
        <Banner headline={headline}/>
        <div className="page-body">
          <div className="text-row">
          <div className="container">
          <div className="row">
            <h3 className="about-me">About Alex</h3>
          </div>
          <div className="row">
            <img className="portrait col-md-2" src={FacePic} alt="The Renown Alex Perez"/>
            <div className="portrait-text col-md-10">
              <p>{portraitText}</p>
            </div>
          </div>
          </div>
          </div>
          <div className="text-row">
            <div className="container">
              <h3>Alex Perez Development</h3>
              <div className="col-xs-12">
                <p>{theBeginning}</p>
                <p>{theBeginning2}</p>
                <hr />
                <p style={{textAlign: 'center'}}>Interested in seeing my work?</p>
                <div style={{textAlign: 'center'}}>
                  <Link className="btn btn-default about-button" to="/portfolio">Check out my Portfolio</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-row">
          <div className="container">
          <div className="row">
            <h3>Working With Me</h3>
            <div className="col-xs-12">
              <p>{workingWithMe}</p>
              <p>{workingWithMe2}</p>
              <hr />
              <p style={{textAlign: 'center'}}>Let's get started!</p>
              <div style={{textAlign: 'center'}}>
                <Link className="btn btn-default about-button" to="/contact">Work with Me</Link>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

}
