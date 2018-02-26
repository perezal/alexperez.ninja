import React from "react";

export default class Chevron extends React.Component {

  constructor() {
    super();

    this.state = {
      leftColumn: false,
      rightColumn: false
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

    const columns = document.querySelectorAll(".column-text");

    columns.forEach(function(el) {
      const rect = el.getBoundingClientRect();

      if (rect.top < innerHeightOffset){

        var stateObject = {};
        stateObject[el.id] = true;

        _this.setState(stateObject);
      }

    });

  }

  render() {

    const leftColumnFadeIn = this.state.leftColumn ? "fade-in" : "";
    const rightColumnFadeIn = this.state.rightColumn ? "fade-in" : "";

    const leftColumnText = "Your colors, your form, your personality. I learn about who you are, how you connect with your work, and what you want from your website. I'll formulate a design that best complements you and your business.";
    const rightColumnText = "I'll implement your website using a powerful set of tools and rigorous testing procedures. The result will be a stunning website that combines form and functionality to help move your business forward.";

    return (
      <div className="chevron clearfix">
        <div className="col-xs-6 chevron-column left-column">
          <div id="leftColumn" className={"column-text " + leftColumnFadeIn}>
            <h2>From Start...</h2>
            <hr />
            <p>{leftColumnText}</p>
          </div>
        </div>
        <div className="col-xs-6 chevron-column right-column">
          <div id="rightColumn" className={"column-text " + rightColumnFadeIn}>
            <h2>...to Finish</h2>
            <hr />
            <p>{rightColumnText}</p>
          </div>
        </div>
        <div className="chevron-border">
        </div>
      </div>
    )
  }

}
