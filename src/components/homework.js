import {Spin} from 'antd';
import React, {useEffect, useState} from 'react';
import {fetch} from '../utils/fetch';

export const subject_name = {
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

export const subjects = [
  'ch',
  'ma',
  'en',
  'phy',
  'chem',
  'bio',
  'pol',
  'his',
  'geo',
  'ban',
  'other'];

export default function Homework({fontSize, fontColor}) {
  const [homework, setHomework] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSource = async () => {
      let json = await fetch('/homework', subject_name);

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
                if (homework[i] !== '') {
                  return (
                    <div className={'single'} key={i}>
                      <h2 style={{
                        fontSize: fontSize,
                        color: fontColor,
                      }}>{subject_name[i]}</h2>
                      {homework[i].split('\n').map((k) => (
                        <p key={k} style={{
                          marginLeft: '2em',
                          fontSize: fontSize,
                          color: fontColor,
                        }}>{k}</p>
                      ))}
                    </div>
                  );
                }
              })}
        </Spin>
      </div>
  );
}
