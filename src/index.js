import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import HomeworkEditPage from './pages/homework';
import App from './pages/index';
import SettingsPage from './pages/settings';
import Page404 from './pages/404';
import './styles/global.css';

moment('zh-cn');

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<App />} />
          <Route path={'/homework'} element={<HomeworkEditPage />} />
          <Route path={'/settings'} element={<SettingsPage />} />
          <Route path={'*'} element={<Page404 />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
