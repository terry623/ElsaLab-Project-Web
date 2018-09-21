import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { media } from '../size';
import { pinkColorDark, pinkColorLight } from '../color';

const AwardingImage1 = '/static/award_1.png';
const AwardingImage2 = '/static/award_2.png';
const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const AwardingTitleBlock = styled.div`
  background: url(${BackgroundImage});
  height: 100%;
  z-index: -50;
  width: 18rem;
  margin-left: 13rem;

  ${media.notebook`
    width: 18rem;
    margin-left: 13rem;
  `};
  ${media.desktop`
    width: 23rem;
    margin-left: 18rem;
  `};
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 1.5rem;
  padding: 10rem 2rem 2rem;

  ${media.notebook`
    font-size: 2.5rem;
    padding: 10rem 2rem 2rem;
  `};
  ${media.desktop`
    font-size: 3rem;
    padding: 12rem 2rem 2rem;
  `};
`;

const Media = styled.img`
  width: 50%;
  margin: 0 0 1.5rem 27rem;

  ${media.notebook`
    margin: 0 0 1.5rem 27rem;
  `};
  ${media.desktop`
    margin: 0 0 2rem 35rem;
  `};
`;

const Awarding = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(0)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background>
        <AwardingTitleBlock>
          <Title>Awarding</Title>
        </AwardingTitleBlock>
      </Background>
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.1} speed={0.5}>
      <Row type="flex" justify="center">
        <Col span={18}>
          <Row>
            <Col>
              <Media src={AwardingImage1} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Media src={AwardingImage2} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

Awarding.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Awarding;
