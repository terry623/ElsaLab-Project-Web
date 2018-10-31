import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import BackgroundImage from '../static/background_image_invert_vertical_2.jpg';
import BackgroundImageGreen from '../static/background_image_green.jpg';
import { media } from '../size';

const BodyCSS = {
  height: '60vmin',
  opacity: '0.7',
  padding: '0',
};

const width = '150vmin';

const Background = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Title = styled.div`
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 10vmin;
  font-size: 4vmin;
  padding: 2vmin 2vmin 2vmin 3vmin;

  ${media.lessThan('notebook')`
    width: 90vmin;
  `};
`;

const backgroundMap = {
  'Virtual-to-Real': BackgroundImage,
  'Dynamic-Video-Segmentation-Network': BackgroundImageGreen,
};

class ResultsModal extends Component {
  render() {
    const { visible, title, closeModal, projectName } = this.props;

    return (
      <Modal
        visible={visible}
        centered
        bodyStyle={BodyCSS}
        width={width}
        onCancel={closeModal}
        footer={null}
        wrapClassName="block"
      >
        <Background background={backgroundMap[projectName]}>
          <Title>{title}</Title>
        </Background>
      </Modal>
    );
  }
}

ResultsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ResultsModal;
