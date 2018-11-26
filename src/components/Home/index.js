import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundCourses from '../static/home/Courses.jpg';
import BackgroundNews from '../static/home/News.jpg';
import BackgroundProjects from '../static/home/Projects.jpg';
import BackgroundPublications from '../static/home/Publications.jpg';

import FullPage from './FullPage';

const EntryLink = styled.div`
  position: absolute;
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  top: 70%;
  left: 0;
`;

const ImageEntry = styled.img`
  width: 100%;
  height: 100%;
  border: 5px white solid;
`;

const BlackLayer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 1);
  }
`;

const Text = styled.div`
  font-size: 1.5vw;
  text-align: center;
  line-height: 20vh;
  margin: auto;
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  state = {
    current: 0,
  };

  changeBackground = index => {
    this.setState({
      current: index,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <FullPage current={current} />
        <EntryLink>
          <Row type="flex" justify="space-around">
            <Col span={4}>
              <ImageEntry src={BackgroundCourses} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(1)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <Text>Courses</Text>
              </BlackLayer>
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundPublications} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(2)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <Text>Publications</Text>
              </BlackLayer>
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundProjects} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(3)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <Text>Projects</Text>
              </BlackLayer>
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundNews} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(4)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <Text>News</Text>
              </BlackLayer>
            </Col>
          </Row>
        </EntryLink>
      </Fragment>
    );
  }
}

export default Home;
