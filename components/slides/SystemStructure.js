import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

const SystemStructure = ({ mainOffset }) => (
  <div>
    <Parallax.Layer
      className="media_layer"
      offset={mainOffset}
      speed={1}
      style={{ backgroundColor: '#fcebeb' }}
    />
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default SystemStructure;
