import { getRetJSON, RET_JSON } from '@/utils/types';
import common from '@/utils/common';
import { notification } from 'antd';

export async function fetch(url: string, query?: {}) {
  try {
    let res = await common.ax.get(url, { params: query });
    let json: RET_JSON = res.data;

    if (json['success'] !== 1) {
      notification.error({
        message: 'Error',
        description: json['err'] || 'Unknown',
      });
    }

    return json;
  } catch (e) {
    notification.error({
      message: 'Error',
      description: e.toString(),
    });

    return getRetJSON({ err: e.toString() });
  }
}

export async function post(url: string, body: string) {}
