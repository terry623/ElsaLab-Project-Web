import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { ScreenSM, ScreenXXL } from '../size';
import { pinkColorDark, pinkColorLight } from '../color';

const BackgroundImage = '/static/background_image.jpg';

const ProposedMethodology = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(4)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset} speed={0.5}>
      <div className="proposedMethodology">
        <Row className="title_block">
          <Col span={15} offset={4}>
            <p className="main_title">Proposed Methodology</p>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">
              Bridge the Gap between Simulation and Reality
            </div>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">Training in Simulated Enviorments</div>
          </Col>
        </Row>
        <Row className="block">
          <Col span={15} offset={4}>
            <div className="block_title">
              Visual Guidance Module and Target Switching
            </div>
          </Col>
        </Row>
      </div>
    </Parallax.Layer>
    <style jsx>{`
      .back_layer {
        background-color: ${pinkColorLight};
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
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url(${BackgroundImage});
        background-size: cover;
        color: ${pinkColorLight};
        width: 100%;
        z-index: -100;
      }
      @media (max-width: ${ScreenSM}) {
        // FIXME: 設計要討論
        .proposedMethodology {
          margin-top: 6rem;
        }
        .block_title {
          height: 6rem;
          font-size: 2rem;
          margin: 1rem 0;
          padding: 1.5rem;
        }
        .main_title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      @media (min-width: ${ScreenSM}) {
        .proposedMethodology {
          margin-top: 6rem;
        }
        .block_title {
          height: 6rem;
          font-size: 2rem;
          margin: 1rem 0;
          padding: 1.5rem;
        }
        .main_title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      @media (min-width: ${ScreenXXL}) {
        .proposedMethodology {
          margin-top: 10rem;
        }
        .block_title {
          height: 8rem;
          font-size: 2.5rem;
          margin: 1rem 0;
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

ProposedMethodology.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default ProposedMethodology;
