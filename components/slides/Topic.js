import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-spring';

import { ScreenSM, ScreenXXL } from '../size';

import Header from './Header';

const BackgroundImage = '/static/background_image.jpg';

const Title = styled.h1`
  color: white;
  font-size: 50px;
`;

const Topic = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(1)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Header />
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.3} speed={0.5}>
      <Title>My page</Title>
      <div className="card">
        <div className="title_block">
          <div className="year_title">2017</div>
          <div className="main_title">Virtual-to-Real:</div>
          <div className="sub_title">
            Learning to Control in Visual Semantic
          </div>
          <div className="sub_title">Segmentation</div>
        </div>
      </div>
    </Parallax.Layer>
    <style jsx>{`
      .card {
        width: 50%;
        height: 60%;
        margin-left: 45%;
        background-color: black;
        opacity: 0.5;
        border: 1rem solid white;
        padding: 1rem;
      }
      .title_block {
        padding: 0rem 1rem;
        color: white;
      }
      .year_title {
        margin-bottom: -1rem;
      }
      .main_title {
        font-size: 1.5em;
        font-weight: bold;
      }
      @media (max-width: ${ScreenSM}) {
        .card {
          margin: auto;
          width: 70%;
          border-bottom-width: 6rem;
        }
        .title_block {
          font-size: 1.2rem;
        }
        .year_title {
          margin-bottom: 0rem;
        }
      }
      @media (min-width: ${ScreenSM}) {
        .card {
          border-bottom-width: 10rem;
        }
        .title_block {
          font-size: 2rem;
        }
      }
      @media (min-width: ${ScreenXXL}) {
        .card {
          border-bottom-width: 14rem;
        }
        .title_block {
          font-size: 3rem;
        }
      }
      .back_layer {
        background: url(${BackgroundImage});
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
      }
    `}</style>
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Topic;
