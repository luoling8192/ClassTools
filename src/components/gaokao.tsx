import { Spin } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export default function Gaokao() {
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
    //setInterval(fetchSource, 1000);
  }, []);

  return (
    <div className={'box'}>
      <p>{moment(Date.now()).format('YYYY年MM月DD日')}</p>
      <Spin spinning={loading}>
        {!loading && (
          <p>
            距离高考<span style={{color: 'red', fontSize: 'xx-large'}}>{gaokao}</span>天
          </p>
        )}
      </Spin>
    </div>
  );
}
