import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'antd';

const IconImg = '/static/icon.png';

const Header = () => (
  <div>
    <Row type="flex" justify="space-between">
      <Col span={12}>
        <Row type="flex" justify="start">
          <Col>
            <img src={IconImg} alt="icon" />
          </Col>
          <Col>
            <p>NTHU</p>
            <p>ELSA</p>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row type="flex" justify="end" gutter={32}>
          <Col>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Col>
          <Col>
            <Link href="/project">
              <a>Project</a>
            </Link>
          </Col>
          <Col>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
    <style jsx>{`
      img {
        width: 50px;
      }
    `}</style>
  </div>
);

export default Header;
