import React from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'antd';

import { pinkColorDark, pinkColorLight } from '../color';

// const AwardingImage1 = '/static/award_1.png';
// const AwardingImage2 = '/static/award_2.png';
const BackgroundInvertImage = '/static/background_image_invert.jpg';

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const AwardingTitleBlock = styled.div`
  background: url(${BackgroundInvertImage});
  background-position: right center;
  background-size: 180vmin 100vmin;
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

// const Media = styled.img`
//   width: 70vmin;
//   margin: 0 0 3vmin 60vmin;
// `;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: ${pinkColorDark};
  margin-top: 52vmin;
  margin-left: 4vmin;
`;

const Awarding = () => (
  <div className="section">
    <Background>
      <AwardingTitleBlock>
        <Title>Awarding</Title>
        <Square />
      </AwardingTitleBlock>
    </Background>
    {/* <Row type="flex" justify="center">
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
    </Row> */}
  </div>
);

export default Awarding;
