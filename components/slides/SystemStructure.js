import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark, pinkColorLight } from '../color';

const ProductImage = '/static/System_structure_img.jpg';
const BackgroundImage = '/static/background_image.jpg';

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
  background: url(${BackgroundImage});
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

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(2)}>
    <Parallax.Layer offset={mainOffset} speed={1}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.2} speed={0.5}>
      <Row type="flex" justify="center" gutter={20}>
        <SystemCol>
          <MediaTitleBlock>
            <Title>System Structure</Title>
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol>
          <Media src={ProductImage} />
        </SystemCol>
      </Row>
    </Parallax.Layer>
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
