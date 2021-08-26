import styles from '@/styles/gaokao.less';
import { fetch } from '@/utils/fetch';
import { Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Gaokao() {
  const [loading, setLoading] = useState(true);
  const [gaokao, setGaokao] = useState(100);

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/gaokao');

      if (json.success) {
        setLoading(false);
        setGaokao(json.data['span']);
      }
    };

    fetchSource();
  }, []);

  return (
    <div className={'box'}>
      <p>{moment(Date.now()).format('YYYY年MM月DD日')}</p>
      <Spin spinning={loading}>
        {!loading && (
          <p>
            距离高考<span className={styles.gaokao}>{gaokao}</span>天
          </p>
        )}
      </Spin>
    </div>
  );
}
