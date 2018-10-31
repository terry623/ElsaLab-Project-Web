import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import BackgroundImage from './static/background_image.jpg';
import BackgroundImageGreen from './static/background_image_green.jpg';
import { media } from './size';

const Card = styled.div`
  filter: grayscale(${props => props.filter});
  width: 100%;
  height: 30vmin;
  background: linear-gradient(${props => props.rgba}, ${props => props.rgba}),
    url(${props => props.background});
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: 2vmin;
  color: white;
  padding: 4vmin 4vmin 2vmin;
  font-size: 3vmin;

  ${media.lessThan('notebook')`
    margin-bottom: 4vmin;
    height: 35vmin;
  `};
`;

const urlMap = {
  'Virtual-to-Real': BackgroundImage,
  'Dynamic-Video-Segmentation-Network': BackgroundImageGreen,
};

const initSetting = {
  filter: '100%',
  rgba: 'rgba(0, 0, 0, 0.4)',
};

class ProjectCard extends Component {
  state = initSetting;

  changeBackground = () => {
    this.setState({
      filter: '0%',
      rgba: 'rgba(0, 0, 0, 0)',
    });
  };

  backToOrigin = () => {
    this.setState(initSetting);
  };

  render() {
    const { projectName } = this.props;
    const { filter, rgba } = this.state;

    return (
      <Card
        onMouseEnter={() => this.changeBackground()}
        onMouseLeave={() => this.backToOrigin()}
        background={urlMap[projectName]}
        filter={filter}
        rgba={rgba}
      >
        {this.props.children}
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  children: PropTypes.node.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default ProjectCard;
