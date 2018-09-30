import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

import { pinkColorDark, pinkColorLight } from '../color';

import ResultsModal from './ResultsModal';

const BackgroundImage = '/static/background_image.jpg';

const Background = styled.div`
  background-color: ${pinkColorLight};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const MainTitle = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 6vmin;
  margin-bottom: 2vmin;
`;

const BlockTitle = styled.div`
  cursor: pointer;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BackgroundImage});
  background-size: cover;
  z-index: -100;
  color: ${pinkColorLight};
  font-size: 4vmin;
  width: 100%;
  height: 12vmin;
  margin: 2vmin 0;
  padding: 3vmin;
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: ${pinkColorDark};
  float: right;
  margin-top: 3vmin;
`;

const allTitles = [
  {
    id: 1,
    title: 'Bridge the Gap between Simulation and Reality',
  },
  {
    id: 2,
    title: 'Training in Simulated Enviorments',
  },
  {
    id: 3,
    title: 'Visual Guidance Module and Target Switching',
  },
];

class ProposedMethodology extends Component {
  state = {
    modalVisible: false,
    modalTitle: '',
  };

  openModal = title => {
    this.setState({
      modalVisible: true,
      modalTitle: title,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { mainOffset } = this.props;
    const { modalVisible, modalTitle } = this.state;

    return (
      <div>
        <Parallax.Layer offset={mainOffset} speed={0}>
          <Background />
          <ResultsModal
            visible={modalVisible}
            title={modalTitle}
            closeModal={this.closeModal}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={mainOffset + 0.18} speed={0.2}>
          <Row>
            <Col span={15} offset={4}>
              <MainTitle>
                Proposed Methodology
                <Square />
              </MainTitle>
            </Col>
          </Row>
          {allTitles.map(({ id, title }) => (
            <Row key={id}>
              <Col span={15} offset={4}>
                <BlockTitle onClick={() => this.openModal(title)}>
                  {title}
                </BlockTitle>
              </Col>
            </Row>
          ))}
        </Parallax.Layer>
      </div>
    );
  }
}

ProposedMethodology.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default ProposedMethodology;
