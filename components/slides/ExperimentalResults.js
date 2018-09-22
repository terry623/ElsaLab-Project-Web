import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark, pinkColorLight } from '../color';

const BackgroundInvertImage = '/static/background_image_invert.jpg';

const Background = styled.div`
  background: url(${BackgroundInvertImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const MainTitle = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 6vmin;
  margin-bottom: 2vmin;
`;

const BlockTitle = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  z-index: -100;
  color: ${pinkColorLight};
  font-size: 4vmin;
  width: 100%;
  height: 12vmin;
  margin: 2vmin 0;
  padding: 3vmin;
`;

const ExperimentalResults = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(5)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <Row>
        <Col span={15} offset={4}>
          <MainTitle>Experimental Results</MainTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Model Settings and Robotic Platform</BlockTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Learning Curves of the Two Tasks</BlockTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Comparison in the Simulated and Real Worlds</BlockTitle>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

ExperimentalResults.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default ExperimentalResults;
