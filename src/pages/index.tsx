import Gaokao from '@/components/gaokao';
import Homework from '@/components/homework';
import Schedule from '@/components/schedule';
import Weather from '@/components/weather';
import '@/styles/global.less';

export default function IndexPage() {
  return (
    <div className={'wrapper'}>
      <Gaokao />
      <Homework />
      <Schedule />
      <Weather />
    </div>
  );
}
