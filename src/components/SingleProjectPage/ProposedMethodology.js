import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundImage from '../static/background_image.jpg';
import BackgroundImageGreen from '../static/background_image_green.jpg';
import { greenColorBackGround, pinkColorDark, pinkColorLight } from '../color';
import { media } from '../size';

import ResultsModal from './ResultsModal';

const Background = styled.div`
  background-color: ${props => props.color};
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const MainTitle = styled.div`
  color: ${props => props.color};
  font-style: italic;
  font-size: 6vmin;
  margin-top: 18vmin;
  margin-bottom: 2vmin;

  ${media.lessThan('notebook')`
    margin-top: 30vmin;
  `};
`;

const BlockTitle = styled.div`
  cursor: pointer;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.background});
  background-size: cover;
  z-index: -100;
  color: ${props => props.color};
  font-size: 4vmin;
  width: 100%;
  height: 12vmin;
  margin: 2vmin 0;
  padding: 3vmin;

  ${media.lessThan('notebook')`
    height: 18vmin;
  `};
`;

const Square = styled.div`
  width: 5vmin;
  height: 5vmin;
  background-color: ${props => props.color};
  float: right;
  margin-top: 3vmin;

  ${media.lessThan('notebook')`
    margin-top: -3vmin;
  `};
`;

const colorBackgroundMap = {
  'Virtual-to-Real': pinkColorLight,
  'Dynamic-Video-Segmentation-Network': greenColorBackGround,
};

const colorMap = {
  'Virtual-to-Real': pinkColorDark,
  'Dynamic-Video-Segmentation-Network': 'white',
};

const colorBlockTitleMap = {
  'Virtual-to-Real': pinkColorLight,
  'Dynamic-Video-Segmentation-Network': 'white',
};

const colorImageMap = {
  'Virtual-to-Real': BackgroundImage,
  'Dynamic-Video-Segmentation-Network': BackgroundImageGreen,
};

class ProposedMethodology extends Component {
  state = {
    modalVisible: false,
    modalTitle: '',
    modalId: 0,
  };

  openModal = (title, id) => {
    this.setState({
      modalVisible: true,
      modalTitle: title,
      modalId: id,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { modalVisible, modalTitle, modalId } = this.state;
    const { projectName, content } = this.props;

    return (
      <div className="section">
        <Background color={colorBackgroundMap[projectName]}>
          <Row>
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 15, offset: 4 }}>
              <MainTitle color={colorMap[projectName]}>
                Proposed Methodology
                <Square color={colorMap[projectName]} />
              </MainTitle>
            </Col>
          </Row>
          {content.map(({ id, title }) => (
            <Row key={id}>
              <Col xs={{ span: 20, offset: 2 }} xl={{ span: 15, offset: 4 }}>
                <BlockTitle
                  color={colorBlockTitleMap[projectName]}
                  background={colorImageMap[projectName]}
                  onClick={() => this.openModal(title, id)}
                >
                  {title}
                </BlockTitle>
              </Col>
            </Row>
          ))}
        </Background>
        <ResultsModal
          visible={modalVisible}
          title={modalTitle}
          modalId={modalId}
          closeModal={this.closeModal}
          projectName={projectName}
        />
      </div>
    );
  }
}

ProposedMethodology.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectName: PropTypes.string.isRequired,
};

export default ProposedMethodology;
