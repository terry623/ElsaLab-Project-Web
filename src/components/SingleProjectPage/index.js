import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Abstract from './Abstract';
import Awarding from './Awarding';
import Conclusion from './Conclusion';
import ExperimentalResults from './ExperimentalResults';
import NextProject from './NextProject';
import ProposedMethodology from './ProposedMethodology';
import SystemStructure from './SystemStructure';
import Topic from './Topic';
import VideoOverview from './VideoOverview';

const eachBlockTag = [
  'topic',
  'systemStructure',
  'abstract',
  'proposedMethodology',
  'experimentalResults',
  'awarding',
  'videoOverview',
  'conclusion',
  'nextProject',
];

class SingleProjectPage extends Component {
  render() {
    const { name } = this.props;

    // 到時候要根據專案名稱去置換內文
    console.log({ name });

    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={eachBlockTag}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);
          console.log({ fullpageApi });

          return (
            <ReactFullpage.Wrapper>
              {/* <Topic />
              <SystemStructure />
              <Abstract /> */}
              <ProposedMethodology />
              <ExperimentalResults />
              {/* <Awarding />
              <VideoOverview />
              <Conclusion />
              <NextProject /> */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

SingleProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleProjectPage;
