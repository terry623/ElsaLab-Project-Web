import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorLight } from '../color';

import Header from './Header';

const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background: url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
`;

const Card = styled.div`
  width: 100%;
  height: 60vmin;
  border: 2vmin solid white;
  border-bottom-width: 20vmin;
`;

const Block = styled.div`
  width: 100%;
  height: 38vmin;
  background: rgba(0, 0, 0, 0.5);
  color: ${pinkColorLight};
  padding: 2vmin 4vmin 2vmin;
  font-size: 5vmin;
`;

const Year = styled.div`
  margin-bottom: -1.5vmin;
`;

const Title = styled.div`
  font-size: 8vmin;
  font-weight: bold;
  color: white;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  position: absolute;
  top: 4vmin;
  right: 4vmin;
  background-color: ${pinkColorLight};
`;

const Topic = ({ mainOffset }) => (
  <div>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Header />
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.3} speed={0.3}>
      <Row>
        <Col span={11} offset={11}>
          <Card>
            <Block>
              <Square />
              <Year>2017</Year>
              <Title>Virtual-to-Real:</Title>
              <p>Learning to Control in Visual Semantic Segmentation</p>
            </Block>
          </Card>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default Topic;
