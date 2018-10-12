import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { media } from '../size';
import { pinkColorLight } from '../color';

const BackgroundInvertVerticalImage =
  '/static/background_image_invert_vertical.jpg';

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BackgroundInvertVerticalImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Content = styled.p`
  color: white;
  font-size: 2.5vmin;
`;

const Title = styled.div`
  color: ${pinkColorLight};
  font-size: 7vmin;
  margin-top: 18vmin;
  margin-bottom: 2vmin;

  ${media.lessThan('notebook')`
    margin-top: 2vmin;
  `};
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  float: right;
  margin-top: 2vmin;
  margin-right: 2vmin;
  background-color: ${pinkColorLight};
`;

const Bar = styled.div`
  width: 1.5vmin;
  height: 72vmin;
  background-color: ${pinkColorLight};
  position: absolute;
  margin-left: 28vmin;
  margin-top: 28vmin;

  ${media.lessThan('notebook')`
    position: relative;
    float:left;
    margin-left: 0;
    margin-top:20vmin;
    width: 40vmin;
    height: 1.5vmin;
  `};
`;

const Abstract = () => (
  <div className="section">
    <Background>
      <Bar />
      <Row>
        <Col xs={{ span: 16, offset: 4 }} xl={{ span: 12, offset: 4 }}>
          <Row>
            <Title>
              <Col span={12}>Abstract</Col>
              <Col span={12}>
                <Square />
              </Col>
            </Title>
            <Col span={24}>
              <Content>
                Collecting training data from the physical world is usually
                time-consuming and even dangerous for fragile robots, and
                therefore, recent advances in robot learning propose to use
                simulators as the training platform. Unfortunately, the reality
                gap between synthetic and real visual data prohibits directly
                migrating the models trained in virtual worlds to the real
                world. This paper proposes a modular architecture for tackling
                simulation- to-reality problem. The architecture separates the
                learning model into a perception module and a control policy
                module, and uses semantic image segmentation as the meta
                representation for relating these two modules. The perception
                module translates RGB images to semantic image segmentations.
                The control policy module employs deep reinforcement learning
                (RL) methods and takes image segmentations as its inputs.
                Experimental results show that our architecture outperforms all
                baseline methods in the virtual and real environments, and
                learns faster than them.
              </Content>
            </Col>
          </Row>
        </Col>
      </Row>
    </Background>
  </div>
);

export default Abstract;
