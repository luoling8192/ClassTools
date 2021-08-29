import { Col, Row } from 'antd';
import Gaokao from '../components/gaokao';
import Homework from '../components/homework';
import Schedule from '../components/schedule';
import Weather from '../components/weather';

export default function IndexPage() {
  return (
    <Row className={'wrapper'}>
      <Col span={4} />
      <Col span={4}>
        <Row>
          <Gaokao />
        </Row>
      </Col>
      <Col span={8}>
        <Weather />
      </Col>
      <Col span={6}>
        <Homework />
      </Col>
      <Col span={2}>
        <Schedule />
      </Col>
    </Row>
  );
}
