import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark } from '../color';

const Content = styled.p`
  color: gray;
  font-size: 2.5vmin;
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-size: 6vmin;
  margin-bottom: 2vmin;
`;

const Bar = styled.div`
  width: 1.5vmin;
  height: 150vmin;
  background-color: ${pinkColorDark};
  margin-top: -10vmin;
  margin-left: 2vmin;
`;

const Conclusion = ({ mainOffset }) => (
  <div>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.3}>
      <Row>
        <Col span={12} offset={4}>
          <Title>Conclusion</Title>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4}>
          <Content>
            We presented a new modular architecture for transferring policies
            learned in simulation to the real world for vision-based
            roboticcontrol. We proposed to separate the model in to a perception
            module and a control policy module, and introduce the concept of
            using semantic image segmentation as the meta state for relating
            these two modules. We trained our model with a standard RL
            algorithm, and did not apply any domain randomization technique. We
            performed experiments in two benchmark tasks: an obstacle avoidance
            task and a target following task, and demonstrated that our proposed
            method outperforms the baseline models in both virtual and real
            environments. We analyzed the use of scene semantics as the meta
            state, and show that this structured form of representations does
            improve the learning speed of our model
          </Content>
        </Col>
        <Col span={3}>
          <Bar />
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

Conclusion.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default Conclusion;
