import Gaokao from '@/components/gaokao';
import Homework from '@/components/homework';
import Weather from '@/components/weather';
import '@/styles/global.less';

export default function IndexPage() {
  return (
    <div className={'wrapper'}>
      <Gaokao />
      <Homework />
      <Weather />
    </div>
  );
}
