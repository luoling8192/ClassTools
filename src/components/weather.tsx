import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export default function Weather() {
  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState('CN101240102');
  const [key, setKey] = useState('0b23abc522ab4c15804ace26ef307466');

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/weather');

      if (json.success) {
        setCity(json.data['city']);
        setKey(json.data['key']);
      }
    };

    fetchSource();
    //setInterval(fetchSource, 1000);
  }, []);

  function onload() {
    setLoading(false);
  }

  return (
    <div className={'box'}>
      <Spin spinning={loading}>
        <iframe
          id={'weather'}
          src={`https://weather-ten-alpha.vercel.app/weather.html?bg=3&md=034&lc=${city}&key=${key}`}
          frameBorder="0"
          scrolling="no"
          width="400"
          height="640"
          allowTransparency={true}
          style={{ background: 'transparent' }}
          onLoad={onload}
        />
      </Spin>
    </div>
  );
}
