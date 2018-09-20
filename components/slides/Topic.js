import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-spring';

import { media } from '../size';

import Header from './Header';

const BackgroundImage = '/static/background_image.jpg';

const BackGround = styled.div`
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
  border: 1rem solid white;
  margin: auto;
  padding: 1rem;
  border-bottom-width: 7rem;

  ${media.notebook`
    width: 50%;
    margin-left: 45%;
    border-bottom-width: 10rem;
  `};
  ${media.desktop`
    width: 50%;
    margin-left: 45%;
    border-bottom-width: 14rem;
  `};
`;

const Block = styled.div`
  padding: 0rem 1rem;
  color: white;
  font-size: 1.2rem;

  ${media.notebook`
    font-size: 2rem;
  `};
  ${media.desktop`
    font-size: 3rem;
  `};
`;

const Year = styled.div`
  color: white;
  margin-bottom: 0rem;

  ${media.notebook`
    margin-bottom: -1rem;
  `};
  ${media.desktop`
    margin-bottom: -1rem;
  `};
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Topic = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(1)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Header />
      <BackGround />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.3} speed={0.5}>
      <Card>
        <Block>
          <Year>2017</Year>
          <Title>Virtual-to-Real:</Title>
          <div>
            Learning to Control in Visual Semantic
            <br />
            Segmentation
          </div>
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
