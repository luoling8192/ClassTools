import common from '@/common';
import { useEffect, useState } from 'react';
import { notification, Skeleton } from 'antd';
import styles from '../styles/homework.less';

function SingleHomeWork({ subject }: { subject: string }) {
  let subject_name: any = {
    ch: '语文',
    ma: '数学',
    en: '英语',
    phy: '物理',
    chem: '化学',
    bio: '生物',
    ban: '班务',
  };

  const [subjects, setSubjects] = useState(
    <Skeleton.Input style={{ width: 200 }} active />,
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        let query: any = {};
        query[subject] = 1;

        let json: any = (
          await common.ax.get('/homework', {
            params: query,
          })
        ).data;

        // TODO: 封装
        if (json['success'] !== 1) {
          notification.error({
            message: 'Error',
            description: json['err'] || 'null',
          });
        } else {
          if (json.data[subject] === '') json.data[subject] = '暂无';
          setSubjects(<p>{json.data[subject]}</p>);
        }
      } catch (e) {
        notification.error({
          message: 'Error',
          description: e,
        });
      }
    };

    setInterval(fetch, 1000);
  }, []);

  return (
    <div className={styles.single}>
      <h2>{subject_name[subject]}</h2>
      {subjects}
    </div>
  );
}

export default function Homework() {
  const subjects = ['ch', 'ma', 'en', 'phy', 'chem', 'bio', 'ban'];

  return (
    <div className={`box ${styles.box}`}>
      {subjects.map((i) => (
        <SingleHomeWork key={i} subject={i} />
      ))}
    </div>
  );
}
