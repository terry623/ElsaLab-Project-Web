import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark, pinkColorLight } from '../color';

const ProductImage = '/static/System_structure_img.jpg';
const BackgroundImage = '/static/background_image.jpg';

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(2)}>
    <Parallax.Layer offset={mainOffset} speed={1}>
      <div className="back_layer_2" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset} speed={0.5}>
      <Row type="flex" justify="center">
        <Col span={8} offset={1}>
          <Row type="flex" justify="start">
            <Col className="system">
              <div className="media_title">
                <p className="title">
                  System
                  <br />
                  Structure
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row type="flex" justify="end">
            <Col className="system">
              <img className="media" src={ProductImage} alt="titleCard" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Parallax.Layer>
    <style jsx global>{`
      .back_layer_2 {
        background-color: ${pinkColorLight};
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: -100;
      }
      .system {
        margin-top: 30%;
        height: 40rem;
      }
      .media_title {
        background: url(${BackgroundImage});
        height: 100%;
        width: 16rem;
      }
      .title {
        font-size: 3rem;
        font-style: italic;
        padding: 2rem;
        color: ${pinkColorDark};
      }
      .media {
        height: 100%;
      }
    `}</style>
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
