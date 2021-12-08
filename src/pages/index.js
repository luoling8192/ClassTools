import {Col, Row} from 'antd';
import {useEffect, useState} from 'react';
import Gaokao from '../components/gaokao';
import Homework from '../components/homework';
import Schedule from '../components/schedule';
import Weather from '../components/weather';
import {fetch} from '../utils/fetch';

export default function IndexPage() {
  const [fontSize, setFontSize] = useState(32);
  const [homeworkFontSize, setHomeworkFontSize] = useState(24);
  const [homeworkFontColor, setHomeworkFontColor] = useState('#fff');

  useEffect(() => {
    const fetchSource = async () => {
      let json = await fetch('/settings');

      if (json['success'] === 1) {
        // console.log(json.data['wallpaper']);
        document.body.style.background = json.data['wallpaper'];
        document.body.style.color = json.data['font-color'];
        setFontSize(json.data['font-size']);
        setHomeworkFontSize(json.data['homework-font-size']);
        setHomeworkFontColor(json.data['homework-font-color']);
      }
    };

    fetchSource();
    setInterval(fetchSource, 1000);
  }, []);

  return (
      <Row className={'wrapper'}>
        <Col span={4}/>
        <Col span={4}>
          <Row>
            <Gaokao fontSize={fontSize}/>
          </Row>
        </Col>
        <Col span={8}>
          <Weather/>
        </Col>
        <Col span={6}>
          <Homework fontSize={homeworkFontSize} fontColor={homeworkFontColor}/>
        </Col>
        <Col span={2}>
          <Schedule fontSize={fontSize}/>
        </Col>
      </Row>
  );
}
