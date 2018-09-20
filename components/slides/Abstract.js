import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { media } from '../size';
import { pinkColorLight } from '../color';

const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Content = styled.p`
  color: white;
  font-size: 1.2rem;

  ${media.desktop`
    font-size: 1.5rem;
  `};
`;

const Title = styled.div`
  color: ${pinkColorLight};
  font-size: 3rem;
  margin-bottom: 1rem;

  ${media.desktop`
    font-size: 4rem;
  `};
`;

const Abstract = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(3)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <Row className="title_block">
        <Col span={12} offset={4}>
          <Title>Abstract</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={4}>
          <Content>
            Collecting training data from the physical world is usually
            time-consuming and even dangerous for fragile robots, and therefore,
            recent advances in robot learning propose to use simulators as the
            training platform. Unfortunately, the reality gap between synthetic
            and real visual data prohibits directly migrating the models trained
            in virtual worlds to the real world. This paper proposes a modular
            architecture for tackling simulation- to-reality problem. The
            architecture separates the learning model into a perception module
            and a control policy module, and uses semantic image segmentation as
            the meta representation for relating these two modules. The
            perception module translates RGB images to semantic image
            segmentations. The control policy module employs deep reinforcement
            learning (RL) methods and takes image segmentations as its inputs.
            Experimental results show that our architecture outperforms all
            baseline methods in the virtual and real environments, and learns
            faster than them.
          </Content>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

Abstract.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Abstract;
