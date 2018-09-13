import React, { Component } from 'react';
import { Parallax } from 'react-spring';

import Abstract from '../components/slides/Abstract';
import Awarding from '../components/slides/Awarding';
import Content from '../components/slides/Content';
import ExperimentalResults from '../components/slides/ExperimentalResults';
import Header from '../components/Header';
import NextProject from '../components/slides/NextProject';
import ProposedMethodology from '../components/slides/ProposedMethodology';
import SystemStructure from '../components/slides/SystemStructure';
import Topic from '../components/slides/Topic';
import VideoOverview from '../components/slides/VideoOverview';

class ProjectPage extends Component {
  render() {
    return (
      <Parallax
        ref={ref => {
          this.parallax = ref;
        }}
        pages={2}
      >
        <Header />
        <Topic mainOffset={0} />
        <SystemStructure mainOffset={1} />
        {/* <Abstract mainOffset={2} />
        <ProposedMethodology mainOffset={3} />
        <ExperimentalResults mainOffset={4} />
        <Awarding mainOffset={5} />
        <VideoOverview mainOffset={6} />
        <Content mainOffset={7} />
        <NextProject mainOffset={8} /> */}
      </Parallax>
    );
  }
}

export default ProjectPage;
