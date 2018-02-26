import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import './App.css';

import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import DirtyFingers from "./pages/subpages/DirtyFingers";
import TaraskaLab from "./pages/subpages/TaraskaLab";
import GTFS from "./pages/subpages/GTFS";
import Trimet from "./pages/subpages/Trimet";

export default class App extends Component {

  render() {

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/portfolio" component={Portfolio} />

          <Route path="/portfolio/dirtyfingers" component={DirtyFingers} />
          <Route path="/portfolio/taraskalab" component={TaraskaLab} />
          <Route path="/portfolio/gtfs" component={GTFS} />
          <Route path="/portfolio/trimet" component={Trimet} />

          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}
