import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import GalleryBackgroundImage from './static/gallery_background_image.jpg';
import Header from './Header';
import { media } from './size';
import { transparentBlack } from './color';

const Background = styled.div`
  background: url(${GalleryBackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Card = styled.div`
  width: 100%;
  height: 30vmin;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 2vmin;
  color: white;
  padding: 4vmin 4vmin 2vmin;
  font-size: 3vmin;

  ${media.lessThan('notebook')`
    margin-bottom: 4vmin;
    height: 35vmin;
  `};
`;

const Year = styled.div`
  font-size: 3vmin;
  margin-bottom: -1vmin;
`;

const ContentTitle = styled.div`
  font-size: 4vmin;
  font-weight: bold;
  color: white;
`;

const Title = styled.div`
  font-size: 5vmin;
  font-weight: bold;
  font-style: italic;
  margin-top: 6vmin;
  margin-bottom: 2vmin;

  ${media.lessThan('notebook')`
    font-size: 7vmin;
    margin-bottom: 4vmin;
  `};
`;

const Gallery = () => (
  <div className="section">
    <Background>
      <Header color={transparentBlack} />
      <Row type="flex" justify="start">
        <Col xs={{ span: 24, offset: 1 }} xl={{ span: 12, offset: 3 }}>
          <Title>Recent Project</Title>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={32}>
        <Col xs={{ span: 24 }} xl={{ span: 6 }}>
          <Link to="/project/Virtual-to-Real">
            <Card>
              <Year>2017</Year>
              <ContentTitle>Virtual-to-Real:</ContentTitle>
              <p>Learning to Control in Visual Semantic Segmentation</p>
            </Card>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 6 }}>
          <Link to="/project/Dynamic-Video-Segmentation-Network">
            <Card>
              <Year>2017</Year>
              <ContentTitle>Dynamic Video Segmentation Network</ContentTitle>
            </Card>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 6 }}>
          <Card />
        </Col>
      </Row>
    </Background>
  </div>
);

export default Gallery;
