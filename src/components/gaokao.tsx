import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { fetch } from '@/utils/fetch';

export default function Gaokao() {
  const [gaokao, setGaokao] = useState(
    <Skeleton.Input style={{ width: 200 }} active />,
  );

  useEffect(() => {
    setInterval(async () => {
      let json: any = await fetch('/gaokao');

      setGaokao(<p>{json.data['span']}</p>);
    }, 1000);
  }, []);

  return (
    <div className={'box'}>
      <h2>高考倒计时</h2>
      {gaokao}
    </div>
  );
}
