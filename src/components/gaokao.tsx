import { Spin } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export default function Gaokao({fontSize}: any) {
  const [loading, setLoading] = useState(true);
  const [gaokao, setGaokao] = useState(100);
  const [countName, setCountName] = useState('高考');
  const [time, setTime] = useState(moment(Date.now()).format('LTS'));
  const weekday = parseInt(moment(Date.now()).weekday().toString());
  let weekdays_list: any = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/gaokao');

      if (json.success) {
        setLoading(false);
        setCountName(json.data['name']);
        setGaokao(json.data['span']);
      }
    };

    fetchSource();
    setInterval(fetchSource, 3000);
    setInterval(() => setTime(moment(Date.now()).format('LTS')), 1000);
  }, []);

  return (
    <div className={'box'}>
      <p style={{fontSize: fontSize}}>{moment(Date.now()).format('YY/MM/DD')}&nbsp;{weekdays_list[weekday]}</p>
      <Spin spinning={loading}>
        {!loading && (
          <p style={{fontSize: fontSize}}>
            距离{countName}<span style={{color: 'red', fontSize: fontSize}}>{gaokao}</span>天
          </p>
        )}
      </Spin>
      <p style={{fontSize: fontSize}}>{time}</p>
    </div>
  );
}
