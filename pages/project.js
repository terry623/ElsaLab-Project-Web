import React, { Component } from 'react';
import { Parallax } from 'react-spring';

import Header from '../components/Header';

const BackgroundImage = '/static/background_image.jpg';

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

class ProjectPage extends Component {
  render() {
    return (
      <Parallax
        ref={ref => {
          this.parallax = ref;
        }}
        pages={3}
      >
        <Header />
        <Parallax.Layer offset={0} speed={1}>
          <img
            className="back_layer"
            src={BackgroundImage}
            alt="backgroupImage"
          />
        </Parallax.Layer>
        <Parallax.Layer offset={0.3} speed={0.5}>
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
            alt="titleCard"
          />
        </Parallax.Layer>
        <style jsx>{`
          .back_layer {
            background-size: cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </Parallax>
    );
  }
}

export default ProjectPage;
