import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { pinkColorDark, pinkColorLight } from '../color';

const ProductImage = '/static/System_structure_img.jpg';
const BackgroundInvertImage = '/static/background_image_invert.jpg';

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const SystemCol = styled(Col)`
  height: 65vmin;
`;

const MediaTitleBlock = styled.div`
  background: url(${BackgroundInvertImage});
  background-position: left center;
  background-size: 170vmin 100vmin;
  height: 100%;
  width: 27vmin;
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 5vmin;
  padding: 3vmin;
`;

const Media = styled.img`
  height: 100%;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: white;
  float: right;
  margin-top: 37vmin;
  margin-right: 2vmin;
`;

const SystemStructure = () => (
  <div className="section">
    <Background>
      <Row type="flex" justify="center" gutter={20}>
        <SystemCol>
          <MediaTitleBlock>
            <Title>System Structure</Title>
            <Square />
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol>
          <Media src={ProductImage} />
        </SystemCol>
      </Row>
    </Background>
  </div>
);

export default SystemStructure;
