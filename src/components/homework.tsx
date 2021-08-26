import styles from '@/styles/homework.less';
import { fetch } from '@/utils/fetch';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

export const subject_name: any = {
  ch: '语文',
  ma: '数学',
  en: '英语',
  phy: '物理',
  chem: '化学',
  bio: '生物',
  ban: '班务',
};

export const subjects = ['ch', 'ma', 'en', 'phy', 'chem', 'bio', 'ban'];

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
    setInterval(fetchSource, 1000);
  }, []);

  return (
    <div className={`box ${styles.box}`}>
      <Spin spinning={loading}>
        {!loading &&
          subjects.map((i) => {
            if (homework[i] !== '')
              return (
                <div className={'single'} key={i}>
                  <h2>{subject_name[i]}</h2>
                  {homework[i].split('\n').map((k: string) => (
                    <p key={k}>{k}</p>
                  ))}
                </div>
              );
          })}
      </Spin>
    </div>
  );
}
