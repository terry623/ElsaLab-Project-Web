import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { pinkColorDark, pinkColorLight } from '../color';

import ResultsModal from './ResultsModal';

const BackgroundInvertImage = '/static/background_image_invert.jpg';

const Background = styled.div`
  background: url(${BackgroundInvertImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const MainTitle = styled.div`
  color: ${pinkColorDark};
  font-style: italic;
  font-size: 6vmin;
  margin-top: 18vmin;
  margin-bottom: 2vmin;
`;

const BlockTitle = styled.div`
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
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
    title: 'Model Settings and Robotic Platform',
  },
  {
    id: 2,
    title: 'Learning Curves of the Two Tasks',
  },
  {
    id: 3,
    title: 'Comparison in the Simulated and Real Worlds',
  },
];

class ExperimentalResults extends Component {
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
    const { modalVisible, modalTitle } = this.state;

    return (
      <div className="section">
        <Background>
          <Row>
            <Col span={15} offset={4}>
              <MainTitle>
                Experimental Results
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
        </Background>
        <ResultsModal
          visible={modalVisible}
          title={modalTitle}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default ExperimentalResults;
