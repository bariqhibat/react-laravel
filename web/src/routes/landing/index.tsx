import { Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';

export const Landing: FunctionComponent = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <h1>Freelance.SG</h1>
        </Col>

        <Col span={12}>Behold the freelance.SG</Col>
      </Row>
    </div>
  );
};
