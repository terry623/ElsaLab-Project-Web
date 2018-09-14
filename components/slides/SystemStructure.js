import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(0)}>
    <Parallax.Layer
      offset={mainOffset}
      speed={1}
      style={{ backgroundColor: '#fcebeb' }}
    />
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
