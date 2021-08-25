import styles from '@/styles/gaokao.less';
import { fetch } from '@/utils/fetch';
import { Skeleton } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Gaokao() {
  const [gaokao, setGaokao] = useState(
    <Skeleton.Input style={{ width: 200 }} active />,
  );

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/gaokao');

      if (json.success)
        setGaokao(<p className={styles.gaokao}>{json.data['span']}</p>);
    };

    fetchSource();
  }, []);

  return (
    <div className={'box'}>
      <p className={styles.date}>
        {moment(Date.now()).format('YYYY年MM月DD日')}
      </p>
      {gaokao}
    </div>
  );
}
