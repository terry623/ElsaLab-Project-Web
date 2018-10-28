import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundInvertImage from '../static/background_image_invert.jpg';
import ProductImage from '../static/System_structure_img.jpg';
import { media } from '../size';
import { pinkColorDark, pinkColorLight } from '../color';

const imageMap = {
  'System Structure': ProductImage,
};

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const SystemCol = styled(Col)`
  height: 65vmin;
  margin-top: 18vmin;
  margin-right: 2vmin;

  ${media.lessThan('notebook')`
    margin-top: -2vmin;
  `};
`;

const MediaTitleBlock = styled.div`
  background: url(${BackgroundInvertImage});
  background-position: left center;
  background-size: 170vmin 100vmin;
  height: 100%;
  width: 100%;

  ${media.lessThan('notebook')`
    height: 27vmin;
    margin-top: 40vmin;
  `};
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 5vmin;
  padding: 3vmin;

  ${media.lessThan('notebook')`
    padding: 5vmin;
  `};
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: white;
  float: right;
  margin-top: 37vmin;
  margin-right: 2vmin;

  ${media.lessThan('notebook')`
    margin-top: -22vmin;
    margin-right: 5vmin;
  `};
`;

const SystemStructure = ({ content }) => (
  <div className="section">
    <Background>
      <Row type="flex" justify="center">
        <SystemCol xs={{ span: 24 }} xl={{ span: 3 }}>
          <MediaTitleBlock>
            <Title>{content[0]}</Title>
            <Square />
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol xs={{ span: 24 }} xl={{ span: 12 }}>
          <Media data-src={imageMap[content[0]]} />
        </SystemCol>
      </Row>
    </Background>
  </div>
);

SystemStructure.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SystemStructure;
