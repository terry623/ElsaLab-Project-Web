import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import './ResultsModal.css';

const BodyCSS = {
  height: '50vmin',
};

const ModalBlock = styled(Modal)``;

const width = '150vmin';

const Title = styled.div`
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 10vmin;
  font-size: 4vmin;
  padding: 2vmin;
  padding-left: 3vmin;
`;

class ResultsModal extends Component {
  render() {
    const { visible, title, closeModal } = this.props;

    return (
      <ModalBlock
        visible={visible}
        centered
        bodyStyle={BodyCSS}
        width={width}
        onCancel={closeModal}
        footer={null}
        wrapClassName="block"
      >
        <Title>{title}</Title>
      </ModalBlock>
    );
  }
}

ResultsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ResultsModal;
