import React from "react";

export default class SiteTitle extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "Alex Perez Development"
    };

  //   this.interestsUsed = [];
  //
  //   this.interests = [
  //   ];
  //

  };






  //
  //
  // selectIndex() {
  //
  //     if (this.interestsUsed.length === this.interests.length) {
  //       this.interestsUsed = [];
  //     }
  //
  //     let index = Math.floor(Math.random() * this.interests.length);
  //
  //     if (this.interestsUsed.includes(index)) {
  //       index = this.selectIndex();
  //     }
  //     else {
  //       this.interestsUsed.push(index);
  //     }
  //
  //     return index;
  //
  //   }
  //
  // handleMouseOver() {
  //
  //   const interest = this.interests[this.selectIndex()];
  //
  //   this.setState({text: "Alex Perez dot " + interest});
  // }
  //
  // handleMouseOut() {
  //   this.setState({text: "Alex Perez dot Ninja"});
  // }

  //        <h1 id="site-title" onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>


  render() {

    const {text} = this.state;

    return (
      <div className="clearfix">
        <h1 id="site-title">
          {text}
        </h1>
      </div>
    );
  }
}
