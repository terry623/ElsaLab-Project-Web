import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { ScreenSM, ScreenXXL } from '../size';
import { pinkColorLight } from '../color';

const BackgroundImage = '/static/background_image.jpg';

const Abstract = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(3)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.18} speed={0.5}>
      <div className="abstract">
        <Row className="title_block">
          <Col span={12} offset={4}>
            <p className="main_title">Abstract</p>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={4}>
            <p className="content_text">
              Collecting training data from the physical world is usually
              time-consuming and even dangerous for fragile robots, and
              therefore, recent advances in robot learning propose to use
              simulators as the training platform. Unfortunately, the reality
              gap between synthetic and real visual data prohibits directly
              migrating the models trained in virtual worlds to the real world.
              This paper proposes a modular architecture for tackling
              simulation- to-reality problem. The architecture separates the
              learning model into a perception module and a control policy
              module, and uses semantic image segmentation as the meta
              representation for relating these two modules. The perception
              module translates RGB images to semantic image segmentations. The
              control policy module employs deep reinforcement learning (RL)
              methods and takes image segmentations as its inputs. Experimental
              results show that our architecture outperforms all baseline
              methods in the virtual and real environments, and learns faster
              than them.
            </p>
          </Col>
        </Row>
      </div>
    </Parallax.Layer>
    <style jsx>{`
      .back_layer {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${BackgroundImage});
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: -100;
      }
      .abstract {
        color: white;
      }
      .main_title {
        color: ${pinkColorLight};
        margin-bottom: 1rem;
      }
      @media (max-width: ${ScreenSM}) {
        // FIXME: 設計要討論
        .main_title {
          font-size: 3rem;
        }
        .content_text {
          font-size: 1.2rem;
        }
      }
      @media (min-width: ${ScreenSM}) {
        .main_title {
          font-size: 3rem;
        }
        .content_text {
          font-size: 1.2rem;
        }
      }
      @media (min-width: ${ScreenXXL}) {
        .main_title {
          font-size: 4rem;
        }
        .content_text {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </div>
);

Abstract.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Abstract;
