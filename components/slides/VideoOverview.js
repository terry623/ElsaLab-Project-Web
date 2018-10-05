import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { pinkColorMid } from '../color';

const videoId = '8osw3ElPAvY';

const opts = {
  frameBorder: '0',
  allowFullScreen: true,
  playerVars: {
    rel: 0,
    showinfo: 0,
    autoplay: 1,
  },
};

const BackgroundInvertVerticalVerticalImage =
  '/static/background_image_invert_vertical_2.jpg';

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BackgroundInvertVerticalVerticalImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const SystemCol = styled(Col)`
  height: 65vmin;
  margin-top: 18vmin;
`;

const MediaTitleBlock = styled.div`
  background-color: ${pinkColorMid};
  height: 100%;
  width: 27vmin;
  margin-left: 8vmin;
`;

const Title = styled.div`
  color: white;
  font-style: italic;
  font-size: 5vmin;
  padding: 3vmin;
`;

const YoutubePlayer = styled(YouTube)`
  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: white;
  margin-top: 37vmin;
  margin-left: 2vmin;
`;

const Wrapper = styled.div`
  width: 115vmin;
  height: 100%;
`;

// FIXME: 滑鼠在影片上，會不能滑動
const VideoOverview = () => (
  <div className="section">
    <Background>
      <Row type="flex" justify="center">
        <SystemCol>
          <MediaTitleBlock>
            <Title>Video Overview</Title>
            <Square />
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol>
          <Wrapper>
            <YoutubePlayer videoId={videoId} opts={opts} />
          </Wrapper>
        </SystemCol>
      </Row>
    </Background>
  </div>
);

export default VideoOverview;
