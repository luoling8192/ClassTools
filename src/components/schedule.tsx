import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export default function Schedule() {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState([[]]);

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/schedule');

      if (json.success) {
        setSchedule(json.data);
        setLoading(false);
      }
    };

    fetchSource();
    //setInterval(fetchSource, 1000);
  }, []);

  return (
    <div className={`box`} style={{textAlign: 'center'}}>
      <Spin spinning={loading}>
        {!loading &&
        schedule[0].map((i) => (
          <div className={'single'}>
            <p>{i}</p>
          </div>
        ))}
      </Spin>
    </div>
  );
}
