import { Col, Row } from 'antd';
import Gaokao from '../components/gaokao';
import Homework from '../components/homework';
import Schedule from '../components/schedule';
import Weather from '../components/weather';
import '../styles/global.scss';

export default function IndexPage() {
  // TODO: 路由 -> 布置作业
  return (
    <Row className={'wrapper'}>
      <Col span={4} />
      <Col span={4}>
        <Gaokao />
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
