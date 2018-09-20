import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { media } from '../size';
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
  font-size: 3rem;
  margin-bottom: 1rem;

  ${media.desktop`
    font-size: 4rem;
    margin-bottom: 2rem;
  `};
`;

const BlockTitle = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BackgroundImage});
  background-size: cover;
  z-index: -100;
  color: ${pinkColorLight};
  font-size: 2rem;
  width: 100%;
  height: 6rem;
  margin: 1rem 0;
  padding: 1.5rem;

  ${media.desktop`
    font-size: 2.5rem;
    height: 8rem;
    padding: 2rem;
  `};
`;

const ProposedMethodology = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(4)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <Row>
        <Col span={15} offset={4}>
          <MainTitle>Proposed Methodology</MainTitle>
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
