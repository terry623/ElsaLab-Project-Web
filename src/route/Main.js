import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { AboutPage, HomePage, Project } from './DynamicLoad';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:name?" component={Project} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

export default Main;
