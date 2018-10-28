import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundInvertVerticalImage from '../static/background_image_invert_vertical.jpg';
import { media } from '../size';
import { pinkColorLight } from '../color';

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

const Abstract = ({ content }) => (
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
              <Content>{content[0]}</Content>
            </Col>
          </Row>
        </Col>
      </Row>
    </Background>
  </div>
);

Abstract.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Abstract;
