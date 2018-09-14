import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

const BackgroundImage = '/static/background_image.jpg';
const satellite =
  'https://awv3node-homepage.surge.sh/build/assets/satellite4.svg';

const Abstract = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(0)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.5} speed={0.5}>
      <img
        src={satellite}
        style={{ width: '15%', marginLeft: '45%' }}
        alt="titleCard"
      />
    </Parallax.Layer>
    <style jsx>{`
      .back_layer {
        background: url(${BackgroundImage});
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
      }
    `}</style>
  </div>
);

Abstract.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Abstract;
