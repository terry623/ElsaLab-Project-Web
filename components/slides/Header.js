import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'antd';

import { pinkColorDark } from '../color';

const IconImg = '/static/icon.png';

const Header = () => (
  <div>
    <Row>
      <Col span={8} offset={1} className="navbar_left">
        <Row type="flex" justify="start" align="top" gutter={8}>
          <Col className="nav_item">
            <img src={IconImg} alt="icon" />
          </Col>
          <Col className="nav_item">
            <div id="NTHU">NTHU</div>
            <div id="ELSA">ELSA</div>
          </Col>
        </Row>
      </Col>
      <Col span={8} offset={6} className="navbar_right">
        <Row type="flex" justify="end" align="top" gutter={64}>
          <Col className="nav_item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Col>
          <Col className="nav_item">
            <Link href="/project">
              <a>Project</a>
            </Link>
          </Col>
          <Col className="nav_item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
    <style jsx global>{`
      .nav_item {
        padding-top: 30px;
        padding-bottom: 15px;
        color: ${pinkColorDark};
      }
      .navbar_left {
        margin-top: -10px;
      }
      .nav_item img {
        width: 50px;
      }
      #NTHU {
        font-size: 16px;
      }
      #ELSA {
        font-size: 20px;
      }
      .navbar_right a {
        color: ${pinkColorDark};
      }
      .navbar_right {
        font-size: 20px;
        padding-right: 20px;
      }
      // FIXME: 中間的文字也變成半透明了
      .navbar_right .nav_item:hover {
        background-color: black;
        opacity: 0.5;
      }
      .navbar_right .nav_item:hover a {
        color: white;
      }
    `}</style>
  </div>
);

export default Header;
