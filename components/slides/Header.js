import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { pinkColorDark } from '../color';

const IconImg = '/static/icon.png';

const NabItemCol = styled(Col)`
  padding-top: 4vmin;
  padding-bottom: 2vmin;
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
  margin-top: -1vmin;
`;

const NavBarRightCol = styled(Col)`
  font-size: 2.5vmin;
  padding-right: 2vmin;
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

// FIXME: 現在 hover 不到
const Header = () => (
  <Row>
    <NavBarLeftCol span={8} offset={1}>
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
    <NavBarRightCol span={8} offset={6}>
      <Row type="flex" justify="end" align="top" gutter={64}>
        <NabItemColRight>
          <Link href="/">
            <Entry>Home</Entry>
          </Link>
        </NabItemColRight>
        <NabItemColRight>
          <Link href="/project">
            <Entry>Project</Entry>
          </Link>
        </NabItemColRight>
        <NabItemColRight>
          <Link href="/about">
            <Entry>About</Entry>
          </Link>
        </NabItemColRight>
      </Row>
    </NavBarRightCol>
  </Row>
);

export default Header;
