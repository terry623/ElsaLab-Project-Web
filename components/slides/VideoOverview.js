import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';
import { Player } from 'video-react';

import { pinkColorDark, pinkColorLight } from '../color';

const DemoVideo = 'https://www.youtube.com/embed/8osw3ElPAvY';
const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const SystemCol = styled(Col)`
  height: 65vmin;
`;

const MediaTitleBlock = styled.div`
  background-color: ${pinkColorLight};
  height: 100%;
  width: 27vmin;
`;

const Title = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 5vmin;
  padding: 3vmin;
`;

const MediaPlayer = styled(Player)`
  height: 100%;
`;

const VideoOverview = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(0)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <Row type="flex" justify="center" gutter={20}>
        <SystemCol>
          <MediaTitleBlock>
            <Title>
              Video
              <br />
              Overview
            </Title>
          </MediaTitleBlock>
        </SystemCol>
        <SystemCol>
          {/* FIXME: 參考 https://video-react.js.org/components/player/ */}
          <MediaPlayer>
            <source src={DemoVideo} />
          </MediaPlayer>
        </SystemCol>
      </Row>
    </Parallax.Layer>
  </div>
);

VideoOverview.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default VideoOverview;
