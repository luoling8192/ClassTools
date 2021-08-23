import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment('zh-cn');

export default (props: any) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div id="App">{props.children}</div>
    </ConfigProvider>
  );
};
