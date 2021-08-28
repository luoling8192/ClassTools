import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeworkEditPage from './pages/HomeworkEdit';
import App from './pages/index';

moment('zh-cn');

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Switch>
        <Route path={'/'} exact={true}>
          <App />
        </Route>
        <Route path={'/homework'} exact={true}>
          <HomeworkEditPage />
        </Route>
        <Route path={'*'}>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById('root'),
);
