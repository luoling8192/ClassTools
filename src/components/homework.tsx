import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { fetch } from '../utils/fetch';

export const subject_name: any = {
  ch: '语文',
  ma: '数学',
  en: '英语',
  phy: '物理',
  chem: '化学',
  bio: '生物',
  pol: '政治',
  his: '历史',
  geo: '地理',
  other: '其它',
  ban: '班务',
};

export const subjects = ['ch', 'ma', 'en', 'phy', 'chem', 'bio', 'pol', 'his', 'geo', 'ban', 'other'];

export default function Homework() {
  const [homework, setHomework]: any = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/homework', subject_name);

      if (json.success) {
        setHomework(json.data);
        setLoading(false);
      }
    };

    fetchSource();
    setInterval(fetchSource, 3000);
  }, []);

  return (
    <div className={`box`}>
      <Spin spinning={loading}>
        {!loading &&
        subjects.map((i) => {
          if (homework[i] !== '')
            return (
              <div className={'single'} key={i}>
                <h2>{subject_name[i]}</h2>
                {homework[i].split('\n').map((k: string) => (
                  <p key={k} style={{marginLeft: '2em'}}>{k}</p>
                ))}
              </div>
            );
        })}
      </Spin>
    </div>
  );
}
