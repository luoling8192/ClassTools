import styles from '@/styles/schedule.less';
import { fetch } from '@/utils/fetch';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

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
  }, []);

  return (
    <div className={`box ${styles.box}`}>
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
