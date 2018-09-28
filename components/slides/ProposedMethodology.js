import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark, pinkColorLight } from '../color';

const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background-color: ${pinkColorLight};
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BackgroundImage});
  background-size: cover;
  z-index: -100;
  color: ${pinkColorLight};
  font-size: 4vmin;
  width: 100%;
  height: 12vmin;
  margin: 2vmin 0;
  padding: 3vmin;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: ${pinkColorDark};
  float: right;
  margin-top: 3vmin;
`;

const ProposedMethodology = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(4)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.3}>
      <Row>
        <Col span={15} offset={4}>
          <MainTitle>
            Proposed Methodology
            <Square />
          </MainTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Bridge the Gap between Simulation and Reality</BlockTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Training in Simulated Enviorments</BlockTitle>
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          <BlockTitle>Visual Guidance Module and Target Switching</BlockTitle>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

ProposedMethodology.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default ProposedMethodology;
