import { Card, Col, Row } from 'antd';
import React from 'react';
import './cardcomponent.css';
import Card2 from './Card2';
import Coin1 from './coins/coin1/Coin1';
import Card1 from './Card1';



const CardComponent = () => (
  <Row gutter={16}>
    <Col span={10}>
      <Card className='card1'> 
        <h3>Select blockchains you would like to see</h3>
       <Coin1 />
        <Card2 />
      </Card>
      
    </Col>
    <Col span={14}>
      <Card className='card2'>
      <Card1 />
      </Card>
    </Col>
   
  </Row>
);

export default CardComponent;
