import Loadable from 'react-loadable';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import { media } from './size';
import { pinkColorDark } from './color';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('../route/Home'),
  loading: Loading,
});

const Project = Loadable({
  loader: () => import('../route/Project'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('../route/About'),
  loading: Loading,
});

const IconImg = '/static/icon.png';

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

const Entry = styled.a`
  color: ${pinkColorDark};

  ${NabItemColRight}:hover & {
    color: white;
  }
`;

const Title = styled.p`
  font-size: ${props => props.size};
  margin: 0;
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
              <Link to="/">
                <NabItemColRight>
                  <Entry>Home</Entry>
                </NabItemColRight>
              </Link>
            </Col>
            <Col>
              <Link to="/project">
                <NabItemColRight>
                  <Entry>Project</Entry>
                </NabItemColRight>
              </Link>
            </Col>
            <Col>
              <Link to="/about">
                <NabItemColRight>
                  <Entry>About</Entry>
                </NabItemColRight>
              </Link>
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
