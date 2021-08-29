import { notification } from 'antd';
import * as querystring from 'querystring';
import common from './common';
import { getRetJSON, RET_JSON } from './types';

export async function fetch(
  url: string,
  query?: {},
  method: 'get' | 'post' = 'get',
) {
  try {
    let res = await common.ax({
      method: method,
      url: url,
      params: query,
      data: querystring.stringify({'data': JSON.stringify(query) || ''}),
    });

    let json: RET_JSON = res.data;

    console.log(json);

    if (json['success'] !== 1) {
      notification.error({
        message: `获取${json['router']}失败！`,
        description: json['err'] || 'Unknown',
      });
    }

    return json;
  } catch (e: any) {
    notification.error({
      message: 'Error',
      description: e.toString(),
    });

    return getRetJSON({err: e.toString()});
  }
}
