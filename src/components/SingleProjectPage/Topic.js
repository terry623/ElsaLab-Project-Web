import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundImage from '../static/background_image.jpg';
import Header from '../Header';
import { media } from '../size';
import { pinkColorLight } from '../color';

const Background = styled.div`
  background: url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Card = styled.div`
  width: 100%;
  height: 60vmin;
  border: 2vmin solid white;
  border-bottom-width: 20vmin;
  margin-top: 16vmin;

  ${media.lessThan('notebook')`
    margin-top: 30vmin;
    height: 70vmin;
  `};
`;

const Block = styled.div`
  width: 100%;
  height: 38vmin;
  background: rgba(0, 0, 0, 0.6);
  color: ${pinkColorLight};
  padding: 2vmin 4vmin 2vmin;
  font-size: 5vmin;

  ${media.lessThan('notebook')`
    font-size: 6vmin;
    height: 48vmin;
  `};
`;

const Year = styled.div`
  margin-bottom: -1.5vmin;
`;

const Title = styled.div`
  font-size: 8vmin;
  font-weight: bold;
  color: white;

  ${media.lessThan('notebook')`
    font-size: 10vmin;
  `};
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  position: absolute;
  top: 20vmin;
  right: 4vmin;
  background-color: ${pinkColorLight};
`;

const Topic = () => (
  <div className="section">
    <Background>
      <Header />
      <Row>
        <Col xs={{ span: 24 }} xl={{ span: 11, offset: 11 }}>
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
    </Background>
  </div>
);

export default Topic;
