import { Spin } from 'antd';
import { useState } from 'react';

export default function Weather() {
  const [loading, setLoading] = useState(true);

  function onload() {
    setLoading(false);
  }

  return (
    <div className={'box'}>
      <Spin spinning={loading}>
        <iframe
          id={'weather'}
          src="https://weather-ten-alpha.vercel.app/weather.html?bg=3&md=034&lc=CN101240102&key=0b23abc522ab4c15804ace26ef307466"
          frameBorder="0"
          scrolling="no"
          width="400"
          height="790"
          allowTransparency={true}
          style={{ background: 'transparent' }}
          onLoad={onload}
        />
      </Spin>
    </div>
  );
}
