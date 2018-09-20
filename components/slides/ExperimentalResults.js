import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { ScreenSM, ScreenXXL } from '../size';
import { pinkColorDark, pinkColorLight } from '../color';

const BackgroundInvertImage = '/static/background_image_invert.jpg';

const ExperimentalResults = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(0)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <div className="proposedMethodology">
        <Row className="title_block">
          <Col span={15} offset={4}>
            <p className="main_title">Experimental Results</p>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">
              Model Settings and Robotic Platform
            </div>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">Learning Curves of the Two Tasks</div>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">
              Comparison in the Simulated and Real Worlds
            </div>
          </Col>
        </Row>
      </div>
    </Parallax.Layer>
    <style jsx>{`
      .back_layer {
        background: url(${BackgroundInvertImage});
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: -100;
      }
      .main_title {
        color: ${pinkColorDark};
        font-style: italic;
      }
      .block_title {
        background: rgba(0, 0, 0, 0.4);
        background-size: cover;
        color: ${pinkColorLight};
        width: 100%;
        z-index: -100;
        margin: 1rem 0;
      }
      @media (max-width: ${ScreenSM}) {
        // FIXME: 設計要討論
        .block_title {
          height: 6rem;
          font-size: 2rem;
          padding: 1.5rem;
        }
        .main_title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      @media (min-width: ${ScreenSM}) {
        .block_title {
          height: 6rem;
          font-size: 2rem;
          padding: 1.5rem;
        }
        .main_title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      @media (min-width: ${ScreenXXL}) {
        .block_title {
          height: 8rem;
          font-size: 2.5rem;
          padding: 2rem;
        }
        .main_title {
          font-size: 4rem;
          margin-bottom: 2rem;
        }
      }
    `}</style>
  </div>
);

ExperimentalResults.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default ExperimentalResults;
