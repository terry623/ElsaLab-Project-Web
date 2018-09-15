import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorLight } from '../color';

const ProductImage = '/static/System_structure_img.jpg';

const SystemStructure = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(2)}>
    <Parallax.Layer offset={mainOffset} speed={1}>
      <div className="back_layer_2" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.2} speed={0.5}>
      <Row type="flex" justify="center" align="middle">
        <Col span={8} className="system_left">
          <Row type="flex" justify="end">
            <div className="media_title">
              <p className="main_title">System Structure</p>
            </div>
          </Row>
        </Col>
        <Col span={16} className="system_right">
          <img src={ProductImage} style={{ width: '80%' }} alt="titleCard" />
        </Col>
      </Row>
    </Parallax.Layer>
    <style jsx global>{`
      .media_title {
        background-color: black;
        margin-right: 20px;
        width: 40%;
        height: 475px;
      }
      .main_title {
        color: white;
      }
      .back_layer_2 {
        background-color: ${pinkColorLight};
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: -100;
      }
    `}</style>
  </div>
);

SystemStructure.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default SystemStructure;
