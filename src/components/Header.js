import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import IconImg from './static/icon.png';
import { media } from './size';

const NabItemCol = styled(Col)`
  padding: 5vmin 4vmin 2vmin 4vmin;
  color: ${props => props.color};
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
  color: ${props => props.color};

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

const Header = ({ color }) => (
  <div>
    <Row>
      <NavBarLeftCol xs={{ span: 8, offset: 1 }} xl={{ span: 8, offset: 1 }}>
        <Row type="flex" justify="start" align="top" gutter={8}>
          <NabItemCol color={color}>
            <Icon src={IconImg} />
          </NabItemCol>
          <NabItemCol color={color}>
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
                <Entry color={color}>Home</Entry>
              </NabItemColRight>
            </EachLink>
          </Col>
          <Col>
            <EachLink to="/project">
              <NabItemColRight>
                <Entry color={color}>Project</Entry>
              </NabItemColRight>
            </EachLink>
          </Col>
          <Col>
            <EachLink to="/about">
              <NabItemColRight>
                <Entry color={color}>About</Entry>
              </NabItemColRight>
            </EachLink>
          </Col>
        </Row>
      </NavBarRightCol>
    </Row>
  </div>
);

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
