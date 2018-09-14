import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

import { pinkColor } from '../color';

const satellite =
  'https://awv3node-homepage.surge.sh/build/assets/satellite4.svg';

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(2)}>
    <Parallax.Layer offset={mainOffset} speed={1}>
      <div className="back_layer_2" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.4} speed={0.5}>
      <img
        src={satellite}
        style={{ width: '15%', marginLeft: '45%' }}
        alt="titleCard"
      />
    </Parallax.Layer>
    <style jsx>{`
      .back_layer_2 {
        background-color: ${pinkColor};
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: -100;
      }
    `}</style>
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
