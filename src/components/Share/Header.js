import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Layout = styled.div`
  width: 100%;
  float: right;
  margin-top: 3vh;
  margin-right: 2vw;
`;

const LinkCol = styled(Col)`
  font-size: 1vw;
  text-align: center;
`;

const EachLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none !important;

  :hover {
    color: ${props => props.color};
  }
`;

const Header = ({ fontColor }) => (
  <Layout>
    <Row type="flex" justify="end" align="middle">
      <LinkCol span={2}>
        <EachLink color={fontColor} to="/">
          Home
        </EachLink>
      </LinkCol>
      <LinkCol span={2}>
        <EachLink color={fontColor} to="/courses">
          Course
        </EachLink>
      </LinkCol>
      <LinkCol span={3}>
        <EachLink color={fontColor} to="/">
          Publications
        </EachLink>
      </LinkCol>
      <LinkCol span={2}>
        <EachLink color={fontColor} to="/projects">
          Projects
        </EachLink>
      </LinkCol>
      <LinkCol span={2}>
        <EachLink color={fontColor} to="/">
          News
        </EachLink>
      </LinkCol>
      <LinkCol span={2}>
        <EachLink color={fontColor} to="/">
          Sign in
        </EachLink>
      </LinkCol>
    </Row>
  </Layout>
);

Header.propTypes = {
  fontColor: PropTypes.string.isRequired,
};

export default Header;
