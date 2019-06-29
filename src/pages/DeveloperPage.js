import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';
import { apis } from '../data/developer';

const DeveloperPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('市场行情API', apis)}
      {createMainCard('', [])}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('', [])}
      {createSideCard('', [])}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default DeveloperPage;