// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';

// import Gallery from './components/Gallery';

import SingleProjectPage from '../components/SingleProjectPage';

class Project extends Component {
  render() {
    return (
      <div>
        <SingleProjectPage name="NOTYET" />
        {/* <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={({ state, fullpageApi }) => {
            console.log('render prop change', state);
            console.log({ fullpageApi });

            return (
              <ReactFullpage.Wrapper>
                <Gallery />
              </ReactFullpage.Wrapper>
            );
          }}
        /> */}
      </div>
    );
  }
}

// Project.propTypes = {};

export default Project;
