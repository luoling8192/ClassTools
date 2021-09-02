import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import Gaokao from '../components/gaokao';
import Homework from '../components/homework';
import Schedule from '../components/schedule';
import Weather from '../components/weather';
import { fetch } from '../utils/fetch';

export default function IndexPage() {
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/settings');

      if (json['success'] === 1) {
        console.log(json.data['wallpaper']);
        document.body.style.background = json.data['wallpaper'];
        setFontSize(json.data['font-size']);
      }
    };

    fetchSource();
    setInterval(fetchSource, 5000);
  }, []);

  return (
    <Row className={'wrapper'}>
      <Col span={4} />
      <Col span={4}>
        <Row>
          <Gaokao fontSize={fontSize} />
        </Row>
      </Col>
      <Col span={8}>
        <Weather />
      </Col>
      <Col span={6}>
        <Homework fontSize={fontSize} />
      </Col>
      <Col span={2}>
        <Schedule fontSize={fontSize} />
      </Col>
    </Row>
  );
}
