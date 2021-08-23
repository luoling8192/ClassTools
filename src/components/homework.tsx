import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { fetch } from '@/utils/fetch';
import styles from '@/styles/homework.less';

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
    setInterval(async () => {
      let query: any = {};
      query[subject] = 1;

      let json: any = await fetch('/homework', query);

      if (json.data[subject] === '') json.data[subject] = '暂无';

      setSubjects(<p>{json.data[subject]}</p>);
    }, 1000);
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
