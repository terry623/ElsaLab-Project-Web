import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Parallax } from 'react-spring';

const BackgroundImageFooter = '/static/background_image_footer.jpg';

const Background = styled.div`
  background: url(${BackgroundImageFooter});
  background-position: center bottom;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Card = styled.div`
  width: 100%;
  height: 35vmin;
  border: 2vmin solid white;
`;

const Block = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 2vmin 4vmin 2vmin;
  font-size: 5vmin;
`;

const Arrow = styled.div`
  font-size: 4vmin;
  color: rgb(121, 153, 255);
  margin-bottom: -1vmin;
`;

const Title1 = styled.div`
  font-size: 7vmin;
  font-weight: bold;
  color: white;
`;

const Title2 = styled(Title1)`
  margin-top: -2vmin;
`;

const Topic = ({ mainOffset }) => (
  <div>
    <Parallax.Layer factor={0.6} offset={mainOffset} speed={0}>
      <Background />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.075} speed={0.2}>
      <Row type="flex" justify="end">
        <Col span={12}>
          <Card>
            <Block>
              <Arrow>Next Project &#8811;</Arrow>
              <Title1>Semantic Highlight</Title1>
              <Title2>Restrieval</Title2>
            </Block>
          </Card>
        </Col>
      </Row>
    </Parallax.Layer>
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
};

export default Topic;
