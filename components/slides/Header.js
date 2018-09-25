import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { pinkColorDark } from '../color';

const IconImg = '/static/icon.png';

const NabItemCol = styled(Col)`
  padding-top: 30px;
  padding-bottom: 15px;
  color: ${pinkColorDark};
`;

const NabItemColRight = styled(NabItemCol)`
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Icon = styled.img`
  width: 50px;
`;

const NavBarLeftCol = styled(Col)`
  margin-top: -10px;
`;

const NavBarRightCol = styled(Col)`
  font-size: 20px;
  padding-right: 20px;
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
  <div>
    <Row>
      <NavBarLeftCol span={8} offset={1}>
        <Row type="flex" justify="start" align="top" gutter={8}>
          <NabItemCol>
            <Icon src={IconImg} />
          </NabItemCol>
          <NabItemCol>
            <Title size={'16px'}>NTHU</Title>
            <Title size={'20px'}>ELSA</Title>
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
  </div>
);

export default Header;
