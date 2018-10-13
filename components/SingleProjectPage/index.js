import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

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
    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={eachBlockTag}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);
          console.log({ fullpageApi });

          return (
            <div id="fullpage-wrapper">
              <Topic />
              <SystemStructure />
              <Abstract />
              <ProposedMethodology />
              <ExperimentalResults />
              <Awarding />
              <VideoOverview />
              <Conclusion />
              <NextProject />
            </div>
          );
        }}
      />
    );
  }
}

export default SingleProjectPage;
