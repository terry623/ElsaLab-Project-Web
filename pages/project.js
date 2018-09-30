import React, { Component } from 'react';
import { Parallax } from 'react-spring';

import Abstract from '../components/slides/Abstract';
import Awarding from '../components/slides/Awarding';
import Conclusion from '../components/slides/Conclusion';
import ExperimentalResults from '../components/slides/ExperimentalResults';
import NextProject from '../components/slides/NextProject';
import ProposedMethodology from '../components/slides/ProposedMethodology';
import SystemStructure from '../components/slides/SystemStructure';
import Topic from '../components/slides/Topic';
import VideoOverview from '../components/slides/VideoOverview';
import { pinkColorLight } from '../components/color';

class ProjectPage extends Component {
  getRef = node => {
    this.DOMnode = node;
  };

  render() {
    return (
      <Parallax ref={this.getRef} pages={8.6}>
        <Parallax.Layer
          offset={0}
          speed={0}
          factor={9}
          style={{
            backgroundColor: pinkColorLight,
            backgroundSize: 'cover',
          }}
        />
        <Topic mainOffset={0} />
        <SystemStructure mainOffset={1} />
        <Abstract mainOffset={2} />
        <ProposedMethodology mainOffset={3} />
        <ExperimentalResults mainOffset={4} />
        <Awarding mainOffset={5} />
        <VideoOverview mainOffset={6} />
        <Conclusion mainOffset={7} />
        <NextProject mainOffset={8} />
      </Parallax>
    );
  }
}

export default ProjectPage;
