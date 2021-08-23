import Homework from '@/components/homework';
import Gaokao from '@/components/gaokao';
import '@/styles/index.less';

export default function IndexPage() {
  return (
    <div className={'wrapper'}>
      <Gaokao />
      <Homework />
    </div>
  );
}
