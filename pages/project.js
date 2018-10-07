import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

import Abstract from '../components/slides/Abstract';
import Awarding from '../components/slides/Awarding';
import Conclusion from '../components/slides/Conclusion';
import ExperimentalResults from '../components/slides/ExperimentalResults';
import NextProject from '../components/slides/NextProject';
import ProposedMethodology from '../components/slides/ProposedMethodology';
import SystemStructure from '../components/slides/SystemStructure';
import Topic from '../components/slides/Topic';
import VideoOverview from '../components/slides/VideoOverview';

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

class ProjectPage extends Component {
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

export default ProjectPage;
