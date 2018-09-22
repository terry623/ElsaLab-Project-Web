import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

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
  width: 40vmin;
  margin-left: 30vmin;
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 6vmin;
  padding: 20vmin 5vmin 5vmin;
`;

const Media = styled.img`
  width: 70vmin;
  margin: 0 0 3vmin 60vmin;
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
