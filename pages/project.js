import React, { Component } from 'react';
import { Parallax } from 'react-spring';

import Abstract from '../components/slides/Abstract';
import Awarding from '../components/slides/Awarding';
// import Content from '../components/slides/Content';
import ExperimentalResults from '../components/slides/ExperimentalResults';
// import NextProject from '../components/slides/NextProject';
import ProposedMethodology from '../components/slides/ProposedMethodology';
import SystemStructure from '../components/slides/SystemStructure';
import Topic from '../components/slides/Topic';
// import VideoOverview from '../components/slides/VideoOverview';
import { pinkColorLight } from '../components/color';

class ProjectPage extends Component {
  scroll = to => this.DOMnode.scrollTo(to);

  getRef = node => {
    this.DOMnode = node;
  };

  render() {
    return (
      <Parallax ref={this.getRef} pages={6}>
        <Parallax.Layer
          offset={0}
          speed={0}
          factor={9}
          style={{
            backgroundColor: pinkColorLight,
            backgroundSize: 'cover',
          }}
        />
        <Topic mainOffset={0} scroll={this.scroll} />
        <SystemStructure mainOffset={1} scroll={this.scroll} />
        <Abstract mainOffset={2} scroll={this.scroll} />
        <ProposedMethodology mainOffset={3} scroll={this.scroll} />
        <ExperimentalResults mainOffset={4} scroll={this.scroll} />
        <Awarding mainOffset={5} scroll={this.scroll} />
        {/* <VideoOverview mainOffset={6} />
        <Content mainOffset={7} />
        <NextProject mainOffset={8} /> */}
      </Parallax>
    );
  }
}

export default ProjectPage;
