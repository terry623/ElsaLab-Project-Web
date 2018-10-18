// import Link from 'next/link';
// import React from 'react';
// import styled from 'styled-components';
// import { Col, Row } from 'antd';

// import Header from './Header';

// const BackgroundImage = '/static/background_image.jpg';

// const Background = styled.div`
//   background: url(${BackgroundImage});
//   background-size: cover;
//   width: 100%;
//   height: 100%;
//   z-index: -100;
// `;

// const Card = styled.div`
//   width: 100%;
//   height: 30vmin;
//   background: rgba(0, 0, 0, 0.5);
//   margin-top: 2vmin;
//   color: white;
//   padding: 12vmin;
// `;

// const Title = styled.div`
//   font-size: 5vmin;
//   font-weight: bold;
//   font-style: italic;
//   margin-top: 6vmin;
//   margin-bottom: 2vmin;
// `;

// const Topic = () => (
//   <div className="section">
//     <Background>
//       <Header />
//       <Row type="flex" justify="start">
//         <Col span={12} offset={3}>
//           <Title>Recent Project</Title>
//         </Col>
//       </Row>
//       <Row type="flex" justify="center" gutter={32}>
//         <Col span={6}>
//           <Link
//             href={{ pathname: '/project', query: { name: 'Virtual-to-Real' } }}
//           >
//             <Card>Click Here !!</Card>
//           </Link>
//         </Col>
//         <Col span={6}>
//           <Card />
//         </Col>
//         <Col span={6}>
//           <Card />
//         </Col>
//       </Row>
//       <Row type="flex" justify="center" gutter={32}>
//         <Col span={6}>
//           <Card />
//         </Col>
//         <Col span={6}>
//           <Card />
//         </Col>
//         <Col span={6}>
//           <Card />
//         </Col>
//       </Row>
//     </Background>
//   </div>
// );

// export default Topic;
