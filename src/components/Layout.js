import React from "react";

import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default class Layout extends React.Component {


  render() {
    const { location } = this.props;

    const PageBodyTransition = ({children, in: inProp, ...props}) => (
        <CSSTransition {...props} in={inProp} timeout={5000} classNames="fade">
          {children}
        </CSSTransition>
      );

    return (
      <div>
        <div className="container">
          <Header location={location} />
        </div>
        <TransitionGroup>

          <PageBodyTransition>
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </PageBodyTransition>

        </TransitionGroup>
        <Footer location={location} />
      </div>
    );
  }
}
