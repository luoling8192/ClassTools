import { Spin } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export default function Gaokao({fontSize}: any) {
  const [loading, setLoading] = useState(true);
  const [gaokao, setGaokao] = useState(100);

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/gaokao');

      if (json.success) {
        setLoading(false);
        setGaokao(json.data['span']);
      }
    };

    fetchSource();
    setInterval(fetchSource, 3000);
  }, []);

  return (
    <div className={'box'}>
      <p style={{fontSize: fontSize}}>{moment(Date.now()).format('YYYY年MM月DD日')}</p>
      <Spin spinning={loading}>
        {!loading && (
          <p style={{fontSize: fontSize}}>
            距离高考<span style={{color: 'red', fontSize: fontSize}}>{gaokao}</span>天
          </p>
        )}
      </Spin>
    </div>
  );
}
