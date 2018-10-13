import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import { withRouter } from 'next/router';

import Gallery from '../components/Gallery';
import SingleProjectPage from '../components/SingleProjectPage';

class ProjectPage extends Component {
  render() {
    const {
      router: { query },
    } = this.props;

    return (
      <div>
        {query.name !== undefined ? (
          <SingleProjectPage name={query.name} />
        ) : (
          <ReactFullpage
            licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
            render={({ state, fullpageApi }) => {
              console.log('render prop change', state);
              console.log({ fullpageApi });

              return (
                <div id="fullpage-wrapper-first">
                  <Gallery />
                </div>
              );
            }}
          />
        )}
      </div>
    );
  }
}

ProjectPage.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(ProjectPage);
