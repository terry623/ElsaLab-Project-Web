import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import Header from '../Share/Header';
import IconImg from '../static/icon.png';
import {
  BackgroundColor,
  BigTitle,
  Hr,
  IconImage,
  LogoContent,
  MainRow,
  MedContent,
  SmallContent,
  Title1,
  Title2,
  TitleText,
} from '../Share';
import project1 from '../Content/VirtualToReal';
import project2 from '../Content/DynamicVideo';

const Blocks = styled.div`
  padding-top: 20vh;
`;

const EachBlock = styled.div`
  width: 100%;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 5vh;
  color: white;
  font-size: 1.5vw;
`;

const Year = styled.div`
`;

const Title = styled.div`
  font-size: 2.5vw;
`;

const Projects = [project1.topic, project2.topic];

const Courses = () => (
  <Row>
    <Col span={9}>
      <BackgroundColor color="#a1afd8">
        <MainRow type="flex" justify="center">
          <LogoContent span={18}>
            <Row type="flex" justify="start" align="middle" gutter={8}>
              <Col>
                <IconImage src={IconImg} />
              </Col>
              <Col>
                <Title1>NTHU</Title1>
                <Title2>ELSA</Title2>
              </Col>
            </Row>
          </LogoContent>
          <SmallContent span={18} color="#8c8c8c">
            <Row type="flex" justify="start" align="bottom">
              <Col span={6}>
                <Hr color="#8c8c8c" />
              </Col>
              <Col span={12} offset={1}>
                Home
              </Col>
            </Row>
          </SmallContent>
          <BigTitle span={18}>
            <TitleText>Projects</TitleText>
          </BigTitle>
          <MedContent span={12} color="#8c8c8c" />
          <Col span={6} />
        </MainRow>
      </BackgroundColor>
    </Col>
    <Col span={15}>
      <BackgroundColor color="white">
        <Header fontColor="#9b9b9b" />
        <Blocks>
          {Projects.map((project, index) => (
            <EachBlock key={index}>
              <Year>{project[0]}</Year>
              <Title>{project[1]}</Title>
              <p>{project[2]}</p>
            </EachBlock>
          ))}
        </Blocks>
      </BackgroundColor>
    </Col>
  </Row>
);

export default Courses;
