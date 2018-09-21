import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-spring';

import { media } from '../size';

import Header from './Header';

const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background: url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
`;

const Card = styled.div`
  width: 70%;
  height: 60%;
  background-color: black;
  opacity: 0.5;
  border: 2vmin solid white;
  margin: auto;
  padding: 2vmin;
  border-bottom-width: 20vmin;

  ${media.notebook`
    width: 50%;
    margin-left: 45%;
  `};
  ${media.desktop`
    width: 50%;
    margin-left: 45%;
  `};
`;

const Block = styled.div`
  padding: 0 2vmin;
  color: white;
  font-size: 5vmin;
`;

const Year = styled.div`
  color: white;
  margin-bottom: 0;

  ${media.notebook`
    margin-bottom: -2vmin;
  `};
  ${media.desktop`
    margin-bottom: -2.5vmin;
  `};
`;

const Title = styled.div`
  font-size: 8vmin;
  font-weight: bold;
`;

const Topic = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(1)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Header />
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.3} speed={0.5}>
      <Card>
        <Block>
          <Year>2017</Year>
          <Title>Virtual-to-Real:</Title>
          <p>Learning to Control in Visual Semantic Segmentation</p>
        </Block>
      </Card>
    </Parallax.Layer>
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Topic;
