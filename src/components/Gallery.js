import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import GalleryBackgroundImage from './static/gallery_background_image.jpg';
import Header from './Header';
import ProjectCard from './ProjectCard';
import { media } from './size';
import { transparentBlack } from './color';

const Background = styled.div`
  background: url(${GalleryBackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
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
            <ProjectCard projectName="Virtual-to-Real" />
          </Link>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 6 }}>
          <Link to="/project/Dynamic-Video-Segmentation-Network">
            <ProjectCard projectName="Dynamic-Video-Segmentation-Network" />
          </Link>
        </Col>
        <Col xs={{ span: 24 }} xl={{ span: 6 }}>
          <ProjectCard />
        </Col>
      </Row>
    </Background>
  </div>
);

export default Gallery;
