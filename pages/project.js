import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

import Gallery from '../components/Gallery';

class ProjectPage extends Component {
  render() {
    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);
          console.log({ fullpageApi });

          return (
            <div id="fullpage-wrapper">
              <Gallery />
            </div>
          );
        }}
      />
    );
  }
}

export default ProjectPage;
