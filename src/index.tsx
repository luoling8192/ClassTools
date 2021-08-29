import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeworkEditPage from './pages/homework';
import App from './pages/index';
import SettingsPage from './pages/settings';
import './styles/global.scss';

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
        <Route path={'/settings'} exact={true}>
          <SettingsPage />
        </Route>
        <Route path={'*'}>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById('root'),
);
