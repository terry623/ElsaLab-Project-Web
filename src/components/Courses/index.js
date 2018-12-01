import React from 'react';
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

const Courses = () => (
  <Row>
    <Col span={9}>
      <BackgroundColor color="#f8d188">
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
            <TitleText>Courses</TitleText>
          </BigTitle>
          <MedContent span={12} color="#8c8c8c" />
          <Col span={6} />
        </MainRow>
      </BackgroundColor>
    </Col>
    <Col span={15}>
      <BackgroundColor color="white">
        <Header fontColor="#9b9b9b" />
      </BackgroundColor>
    </Col>
  </Row>
);

export default Courses;
