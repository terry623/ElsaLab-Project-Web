import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { media } from '../size';
import { pinkColorDark, pinkColorLight } from '../color';

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Content = styled.p`
  color: gray;
  font-size: 2.5vmin;
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-size: 6vmin;
  margin-top: 22vmin;

  ${media.lessThan('notebook')`
    margin-top: 4vmin;
  `};
`;

const Square = styled.div`
  visibility: hidden;
  width: 5vmin;
  height: 5vmin;
  float: right;
  margin-top: 2vmin;
  margin-right: -12vmin;
  background-color: ${pinkColorDark};

  ${media.lessThan('notebook')`
    visibility: visible;
  `};
`;

const Bar = styled.div`
  width: 1.5vmin;
  height: 77vmin;
  background-color: ${pinkColorDark};
  position: absolute;
  margin-left: 28vmin;
  margin-top: 28vmin;

  ${media.lessThan('notebook')`
    position: relative;
    float:left;
    margin-left: 0;
    margin-top:30vmin;
    width: 45vmin;
    height: 1.5vmin;
  `};
`;

const Conclusion = ({ content }) => (
  <div className="section">
    <Background>
      <Bar />
      <Row>
        <Col span={12} offset={4}>
          <Title>
            <Col span={12}>Conclusion</Col>
            <Col span={12}>
              <Square />
            </Col>
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4}>
          <Content>{content[0]}</Content>
        </Col>
      </Row>
    </Background>
  </div>
);

Conclusion.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Conclusion;
