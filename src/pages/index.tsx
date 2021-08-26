import Gaokao from '@/components/gaokao';
import Hitokoto from '@/components/hitokoto';
import Homework from '@/components/homework';
import Schedule from '@/components/schedule';
import Weather from '@/components/weather';
import '@/styles/global.less';
import { Col, Row } from 'antd';

export default function IndexPage() {
  return (
    <Row className={'wrapper'}>
      <Col span={8}>
        <Row justify={'center'}>
          <Gaokao />
        </Row>
        <Row justify={'center'}>
          <Weather />
        </Row>
      </Col>
      <Col span={8}>
        <Hitokoto />
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
