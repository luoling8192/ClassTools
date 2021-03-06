import {Spin} from 'antd';
import React, {useEffect, useState} from 'react';
import {fetch} from '../utils/fetch';

export default function Schedule({fontSize}) {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState([[]]);

  useEffect(() => {
    const fetchSource = async () => {
      let json = await fetch('/schedule');

      if (json.success) {
        setSchedule(json.data);
        setLoading(false);
      }
    };

    fetchSource();
    setInterval(fetchSource, 3000);
  }, []);

  return (
      <div className={`box`} style={{textAlign: 'center'}}>
        <Spin spinning={loading}>
          {!loading &&
              schedule.map((i) => (
                  <div className={'single'}>
                    <p style={{fontSize: fontSize}}>{i}</p>
                  </div>
              ))}
        </Spin>
      </div>
  );
}
