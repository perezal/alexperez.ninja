import React from "react";

export default class Banner extends React.Component {

  constructor() {
    super();
    this.state = {
      backgroundY: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(el) {
    const speedY = -0.2;

    const backgroundY = window.pageYOffset * speedY;

    this.setState({
      backgroundY: backgroundY
    });
  }

  render() {

    const { backgroundY } = this.state;
    const backgroundPosition = backgroundY ? {backgroundPosition: '0 ' + backgroundY + 'px'} : null;

    const { headline } = this.props;

    return (
      <div id="banner" className="banner parallax">
        <div style={backgroundPosition} id="banner-background" className="banner-background">
        </div>
        <div className="banner-border">
          <div className="banner-true">
            <h2 className="fade-in">{headline}</h2>
          </div>
        </div>
      </div>
    )
  }
}
