import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { About, Home, Project } from './DynamicLoad';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/project/:name?" component={Project} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default Main;
