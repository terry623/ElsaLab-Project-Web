import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Button, Col, Modal, Row } from 'antd';
import { Modal } from 'antd';

class ResultsModal extends Component {
  render() {
    const { visible, title, closeModal } = this.props;

    return (
      <Modal
        title={title}
        visible={visible}
        onCancel={closeModal}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

ResultsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ResultsModal;
