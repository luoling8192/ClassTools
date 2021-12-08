import {notification} from 'antd';
import * as querystring from 'querystring';
import common from './common';

function getRetJSON(data) {
  return {
    router: '',
    success: 0,
    data: {},
    err: 'Unknown',
    ...data,
  };
}

export async function fetch(url, query, method) {
  try {
    let res = await common.ax({
      method: method,
      url: url,
      params: query,
      data: querystring.stringify({'data': JSON.stringify(query) || ''}),
    });

    let json = res.data;

    console.log(json);

    if (json['success'] !== 1) {
      notification.error({
        message: `获取${json['router']}失败！`,
        description: json['err'] || 'Unknown',
      });
    }

    return json;
  } catch (e) {
    notification.error({
      message: 'Error',
      description: e.toString(),
    });

    return getRetJSON({err: e.toString()});
  }
}
