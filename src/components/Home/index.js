import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundCourses from '../static/home/Courses.jpg';
import BackgroundHome from '../static/home/delta.jpg';
import BackgroundNews from '../static/home/News.jpg';
import BackgroundProjects from '../static/home/Projects.jpg';
import BackgroundPublications from '../static/home/Publications.jpg';
import IconImg from '../static/icon.png';
import { homeColor } from '../color';

const BackgroundColor = styled.div`
  background-color: ${homeColor};
  height: 100vh;
  width: 100%;
`;

const BackgroundImage = styled.div`
  /* background: url(${props => props.image}); */
  background:url(${BackgroundHome});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const MainRow = styled(Row)`
  padding-left: 6vmin;
`;

const IconImage = styled.img`
  width: 5vmin;
`;

const Title1 = styled.p`
  font-size: 1.5vmin;
  margin: 0;
`;

const Title2 = styled.p`
  font-size: 2vmin;
  margin: 0;
`;

const LogoContent = styled(Col)`
  font-size: 2vmin;
  color: white;
  margin-top: 8vmin;
`;

const Hr = styled.hr`
  width: 100%;
  border: 0;
  height: 2px;
  background: #a9a9a9;
`;

const SmallContent = styled(Col)`
  font-size: 2vmin;
  color: #a9a9a9;
  margin-top: 5vmin;
`;

const BigTitle = styled(Col)`
  font-size: 8vmin;
  color: white;
  margin-top: 6vmin;
  font-weight: bold;
`;

const TitleText = styled.div`
  line-height: 1.2;
`;

const MedContent = styled(Col)`
  font-size: 2vmin;
  color: #a9a9a9;
  margin-top: 5vmin;
`;

const OtherLink = styled(Col)`
  margin-top: 5vmin;
`;

const TextCol = styled.div`
  float: right;
  font-size: 2vmin;
  color: white;
`;

const Text = styled.div`
  background-color: black;
  margin: 3px;
`;

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

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={9}>
            <BackgroundColor>
              <MainRow type="flex" justify="center">
                <LogoContent span={18}>
                  <Row type="flex" justify="start" align="bottom" gutter={8}>
                    <Col>
                      <IconImage src={IconImg} />
                    </Col>
                    <Col>
                      <Title1>NTHU</Title1>
                      <Title2>ELSA</Title2>
                    </Col>
                  </Row>
                </LogoContent>
                <SmallContent span={18}>
                  <Row type="flex" justify="start" align="bottom">
                    <Col span={6}>
                      <Hr />
                    </Col>
                    <Col span={12} offset={1}>
                      Professor : Chun-Yi Lee
                    </Col>
                  </Row>
                </SmallContent>
                <BigTitle span={18}>
                  <TitleText>Welcome to ELSA LAB</TitleText>
                </BigTitle>
                <MedContent span={12}>
                  Department of Computer Science, National Tsing Hua University,
                  No.101, Sec .2, Kuang-Fu Road, Hsinchu, 30013, Taiwan
                </MedContent>
                <OtherLink span={6}>
                  <Row>
                    <TextCol span={24}>
                      <Text>About Elsa Lab</Text>
                    </TextCol>
                    <TextCol span={24}>
                      <Text>Sign in</Text>
                    </TextCol>
                  </Row>
                </OtherLink>
              </MainRow>
            </BackgroundColor>
          </Col>
          <Col span={15}>
            <BackgroundImage />
          </Col>
        </Row>
        <EntryLink>
          <Row type="flex" justify="space-around">
            <Col span={4}>
              <ImageEntry src={BackgroundCourses} />
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundPublications} />
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundProjects} />
            </Col>
            <Col span={4}>
              <ImageEntry src={BackgroundNews} />
            </Col>
          </Row>
        </EntryLink>
      </Fragment>
    );
  }
}

export default Home;
