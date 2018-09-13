import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

const BackgroundImage = '/static/background_image.jpg';
const satellite =
  'https://awv3node-homepage.surge.sh/build/assets/satellite4.svg';

const Topic = ({ mainOffset }) => (
  <div>
    <Parallax.Layer offset={mainOffset} speed={0.5}>
      <img className="back_layer" src={BackgroundImage} alt="backgroupImage" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.5} speed={1.2}>
      <img
        src={satellite}
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
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default Topic;
