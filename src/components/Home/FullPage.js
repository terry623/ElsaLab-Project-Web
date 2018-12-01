import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import IconImg from '../static/icon.png';

import {
  backgroundColorInvertMap,
  backgroundColorMap,
  backgroundImageMap,
  bigTitleMap,
  medColorMap,
  medContentMap,
  otherColorMap,
  smallContentMap,
} from './StyleMap';

const BackgroundColor = styled.div`
  background-color: ${props => props.color};
  height: 100vh;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const MainRow = styled(Row)`
  padding-left: 3vw;
`;

const IconImage = styled.img`
  width: 2vw;
`;

const Title1 = styled.p`
  font-size: 0.75vw;
  margin: 0;
`;

const Title2 = styled.p`
  font-size: 1vw;
  margin: 0;
`;

const LogoContent = styled(Col)`
  color: white;
  margin-top: 8vh;
`;

const Hr = styled.hr`
  width: 100%;
  height: 2px;
  border: 0;
  background: ${props => props.color};
`;

const SmallContent = styled(Col)`
  color: ${props => props.color};
  font-size: 1vw;
  margin-top: 5vh;
`;

const BigTitle = styled(Col)`
  font-size: 4vw;
  color: white;
  margin-top: 6vh;
  font-weight: bold;
`;

const TitleText = styled.div`
  line-height: 1.2;
`;

const MedContent = styled(Col)`
  color: ${props => props.color};
  font-size: 1vw;
  margin-top: 5vh;
`;

const OtherLink = styled(Col)`
  margin-top: 5vh;
`;

const TextCol = styled.div`
  float: right;
  font-size: 1vw;
  color: white;
`;

const Text = styled.div`
  background-color: ${props => props.color};
  margin: 3px;
  padding-left: 3px;
  padding-right: 3px;

  :hover {
    background-color: white;
  }
`;

const PageLink = styled(Link)`
  color: white;

  :hover {
    color: black;
  }
`;

class FullPage extends Component {
  render() {
    const { current } = this.props;

    return (
      <Row>
        <Col span={9}>
          <BackgroundColor color={backgroundColorMap[current]}>
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
              <SmallContent span={18} color={backgroundColorInvertMap[current]}>
                <Row type="flex" justify="start" align="bottom">
                  <Col span={6}>
                    <Hr color={backgroundColorInvertMap[current]} />
                  </Col>
                  <Col span={12} offset={1}>
                    {smallContentMap[current]}
                  </Col>
                </Row>
              </SmallContent>
              <BigTitle span={18}>
                <TitleText>
                  {current !== 0 ? <br /> : ''}
                  {bigTitleMap[current]}
                </TitleText>
              </BigTitle>
              <MedContent span={12} color={medColorMap[current]}>
                {medContentMap[current]}
              </MedContent>
              <OtherLink span={6}>
                <Row>
                  <TextCol span={24}>
                    <PageLink to="/about">
                      <Text color={otherColorMap[current]}>About Elsa Lab</Text>
                    </PageLink>
                  </TextCol>
                  <TextCol span={24}>
                    <PageLink to="/about">
                      <Text color={otherColorMap[current]}>Sign in</Text>
                    </PageLink>
                  </TextCol>
                </Row>
              </OtherLink>
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundImage image={backgroundImageMap[current]} />
        </Col>
      </Row>
    );
  }
}

FullPage.propTypes = {
  current: PropTypes.number.isRequired,
};

export default FullPage;
