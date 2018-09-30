import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorMid } from '../color';

const DemoVideo =
  'https://www.youtube.com/embed/8osw3ElPAvY?rel=0&amp;controls=0&amp;showinfo=0';
const BackgroundInvertVerticalVerticalImage =
  '/static/background_image_invert_vertical_2.jpg';

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundInvertVerticalVerticalImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const SystemCol = styled(Col)`
  height: 65vmin;
`;

const MediaTitleBlock = styled.div`
  background-color: ${pinkColorMid};
  height: 100%;
  width: 27vmin;
`;

const Title = styled.div`
  color: white;
  font-style: italic;
  font-size: 5vmin;
  padding: 3vmin;
`;

const MediaPlayer = styled.iframe`
  width: 115vmin;
  height: 100%;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: white;
  margin-top: 37vmin;
  margin-left: 2vmin;
`;

const VideoOverview = ({ mainOffset }) => (
  <div>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.3}>
      <Row type="flex" justify="center">
        <SystemCol>
          <MediaTitleBlock>
            <Title>Video Overview</Title>
            <Square />
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol>
          <MediaPlayer
            title="demo video"
            src={DemoVideo}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </SystemCol>
      </Row>
    </Parallax.Layer>
  </div>
);

VideoOverview.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default VideoOverview;
