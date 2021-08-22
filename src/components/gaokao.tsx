import { useEffect, useState } from 'react';
import { notification, Skeleton } from 'antd';
import common from '@/common';

export default function Gaokao() {
  const [gaokao, setGaokao] = useState(
    <Skeleton.Input style={{ width: 200 }} active />,
  );

  useEffect(() => {
    const fetch = async () => {
      let json: any = (await common.ax.get('/gaokao')).data;

      // TODO: 封装
      if (json['success'] !== 1) {
        notification.error({
          message: 'Error',
          description: json['err'] || 'null',
        });
      } else {
        setGaokao(<p>{json.data['span']}</p>);
      }
    };

    setInterval(fetch, 1000);
  }, []);

  return (
    <div className={'box'}>
      <h2>高考倒计时</h2>
      {gaokao}
    </div>
  );
}
