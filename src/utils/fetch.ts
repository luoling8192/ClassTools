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
      data: querystring.stringify(query),
    });

    let json: RET_JSON = res.data;

    if (json['success'] !== 1) {
      notification.error({
        message: 'Error',
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
