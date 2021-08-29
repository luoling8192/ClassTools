import { Button, Form, Input, notification, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { subject_name } from '../components/homework';
import { fetch } from '../utils/fetch';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/settings', subject_name);
      setLoading(false);

      json.data['weather-city'] = json.data['weather'].city;

      json.data['schedule'] = json.data['schedule'].map((i: any) =>
        i.toString().replaceAll(',', ' '),
      );

      form.setFieldsValue(json.data);
    };

    fetchSource();
  }, []);

  async function submit() {
    let data: any = form.getFieldsValue();
    data['schedule'] = data['schedule'].map((i: any) =>
      i.trim().replace(/\s{2,}/g, ' ').split(' '), // 正则表达式yyds
    );

    data['weather'] = {'city': data['weather-city']};
    delete data['weather-city'];

    console.log(data);
    await fetch('/settings', data, 'post');
    notification.success({message: '提交成功'});
  }

  return (
    <Spin spinning={loading} size={'large'}>
      <div className={'wrapper'}>
        <h1 style={{textAlign: 'center'}}>设置</h1>
        <Form layout={'vertical'} form={form} style={{textAlign: 'right', width: '40vw', margin: '0 auto'}}>
          <Form.Item label={'教室名称'} name={'class-name'}>
            <Input />
          </Form.Item>
          <Form.Item label={'高考日期'} name={'gaokao-date'}>
            <Input />
          </Form.Item>
          <Form.Item label={'课程表'} style={{marginBottom: 0}}>
            <Form.List name={'schedule'}>
              {
                i => i.map((k) =>
                  <Form.Item {...k}>
                    <Input />
                  </Form.Item>,
                )
              }
            </Form.List>
          </Form.Item>
          <Form.Item label={'城市'} name={'weather-city'}>
            <Input />
          </Form.Item>

          <Button htmlType={'submit'} onClick={submit}>提交</Button>
        </Form>
      </div>
    </Spin>
  );
}