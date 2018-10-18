import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import IconImg from './static/icon.png';
import { About, Home, Project } from './DynamicLoad';
import { media } from './size';
import { pinkColorDark } from './color';

const NabItemCol = styled(Col)`
  padding: 5vmin 4vmin 2vmin 4vmin;
  color: ${pinkColorDark};
`;

const NabItemColRight = styled(NabItemCol)`
  :hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.5;
  }
`;

const Icon = styled.img`
  width: 6vmin;
`;

const NavBarLeftCol = styled(Col)`
  margin-top: -2vmin;
`;

const NavBarRightCol = styled(Col)`
  font-size: 2.5vmin;

  ${media.lessThan('notebook')`
    font-size: 4vmin;
    padding-right: 2vmin;
  `};
`;

const Entry = styled.div`
  color: ${pinkColorDark};

  ${NabItemColRight}:hover & {
    color: white;
  }
`;

const Title = styled.p`
  font-size: ${props => props.size};
  margin: 0;
`;

const EachLink = styled(Link)`
  text-decoration: none !important;
`;

const Header = () => (
  <Router>
    <div>
      <Row>
        <NavBarLeftCol xs={{ span: 8, offset: 1 }} xl={{ span: 8, offset: 1 }}>
          <Row type="flex" justify="start" align="top" gutter={8}>
            <NabItemCol>
              <Icon src={IconImg} />
            </NabItemCol>
            <NabItemCol>
              <Title size="2vmin">NTHU</Title>
              <Title size="2.5vmin">ELSA</Title>
            </NabItemCol>
          </Row>
        </NavBarLeftCol>
        <NavBarRightCol xs={{ span: 15 }} xl={{ span: 8, offset: 6 }}>
          <Row type="flex" justify="end" align="top">
            <Col>
              <EachLink to="/">
                <NabItemColRight>
                  <Entry>Home</Entry>
                </NabItemColRight>
              </EachLink>
            </Col>
            <Col>
              <EachLink to="/project">
                <NabItemColRight>
                  <Entry>Project</Entry>
                </NabItemColRight>
              </EachLink>
            </Col>
            <Col>
              <EachLink to="/about">
                <NabItemColRight>
                  <Entry>About</Entry>
                </NabItemColRight>
              </EachLink>
            </Col>
          </Row>
        </NavBarRightCol>
      </Row>

      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Header;
