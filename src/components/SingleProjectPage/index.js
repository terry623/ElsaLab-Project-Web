import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import DynamicVideoSegmentationNetwork from '../Content/DynamicVideo';
import VirtualToReal from '../Content/VirtualToReal';

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

const projectNameMap = {
  'Virtual-to-Real': VirtualToReal,
  'Dynamic-Video-Segmentation-Network': DynamicVideoSegmentationNetwork,
};

class SingleProjectPage extends Component {
  render() {
    const { name } = this.props;
    const content = projectNameMap[name];

    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={eachBlockTag}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);
          console.log({ fullpageApi });

          return (
            <ReactFullpage.Wrapper>
              <Topic projectName={name} content={content.topic} />
              <SystemStructure projectName={name} />
              <Abstract projectName={name} content={content.abstract} />
              <ProposedMethodology content={content.proposedMethodology} />
              <ExperimentalResults content={content.experimentalResults} />
              <Awarding />
              <VideoOverview />
              <Conclusion content={content.conclusion} />
              <NextProject />
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
