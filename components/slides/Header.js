import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'antd';

import { pinkColor } from '../color';

const IconImg = '/static/icon.png';

const Header = () => (
  <div>
    <Row type="flex" justify="space-between">
      <Col span={12} id="test">
        <Row type="flex" justify="start">
          <Col className="nav_item">
            <img src={IconImg} alt="icon" />
          </Col>
          <Col className="nav_item">
            <p>NTHU</p>
            <p>ELSA</p>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row type="flex" justify="end" gutter={32}>
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
    {/* FIXME: 要參考 ant design 如何排列 */}
    <style jsx global>{`
      .nav_item {
        font-size: 20px;
        color: ${pinkColor};
        padding-top: 30px;
        padding-bottom: 10px;
      }
      .nav_item img {
        width: 50px;
      }
      .nav_item a {
        color: ${pinkColor};
      }
    `}</style>
  </div>
);

export default Header;
