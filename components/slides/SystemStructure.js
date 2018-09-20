import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { media } from '../size';
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
  height: 30rem;

  ${media.desktop`
    height: 40rem;
  `};
`;

const MediaTitleBlock = styled.div`
  background: url(${BackgroundImage});
  height: 100%;
  width: 9rem;

  ${media.desktop`
    width: 16rem;
  `};
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 1.5rem;
  padding: 1rem;

  ${media.notebook`
    font-size: 1.5rem;
    padding: 1rem;
  `};
  ${media.desktop`
    font-size: 3rem;
    padding: 2rem;
  `};
`;

const Media = styled.img`
  height: 100%;
`;

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(2)}>
    <Parallax.Layer offset={mainOffset} speed={1}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <Row type="flex" justify="center">
        <Col span={8} offset={1}>
          <Row type="flex" justify="start">
            <SystemCol>
              <MediaTitleBlock>
                <Title>
                  System
                  <br />
                  Structure
                </Title>
              </MediaTitleBlock>
            </SystemCol>
          </Row>
        </Col>
        <Col span={8}>
          <Row type="flex" justify="end">
            <SystemCol>
              <Media src={ProductImage} />
            </SystemCol>
          </Row>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
