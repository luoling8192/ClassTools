import { Button, Form, Input, notification, Slider, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { fetch } from '../utils/fetch';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/settings');

      if (json['success'] === 1) {
        setLoading(false);

        json.data['weather-city'] = json.data['weather'].city;

        json.data['schedule'] = json.data['schedule'].map((i: any) =>
          i.toString().replaceAll(',', ' '),
        );

        console.log(json.data);
        form.setFieldsValue(json.data);
      }
    };

    fetchSource();
  }, []);

  async function submit() {
    let data: any = form.getFieldsValue();
    data['schedule'] = data['schedule'].map((i: any) =>
        i.split(' '),
      //i.trim().replace(/\s{2,}/g, ' ').split(' '), // 正则表达式yyds
    );

    data['weather'] = {'city': data['weather-city']};
    delete data['weather-city'];

    console.log(form.getFieldsValue());
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
          <Form.Item label={'倒计时名称'} name={'count-name'}>
            <Input />
          </Form.Item>
          <Form.Item label={'倒计时日期'} name={'gaokao-date'}>
            <Input />
          </Form.Item>
          <Form.Item label={'课程表(使用空格分割)'} style={{marginBottom: 0}}>
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
          <Form.Item label={'壁纸 使用文件请用url(...) 使用颜色请用red,#fff,rgb(255,255,255)'} name={'wallpaper'}>
            { // TODO: RGB or URL switcher
              /*
              <Row>
                <Col span={6}>
                  <Select defaultValue={'url'} style={{textAlign: 'left'}}>
                    <Select.Option value={'url'}>URL</Select.Option>
                    <Select.Option value={'rgb'}>RGB HEX eg.(#ffffff)</Select.Option>
                  </Select>
                </Col>
                <Col span={18}>
                  <Input />
                </Col>
              </Row>
            */}
            <Input />
          </Form.Item>
          <Form.Item label={'字体大小'} name={'font-size'}>
            <Slider tooltipVisible={true} />
          </Form.Item>
          <Form.Item label={'作业字体大小'} name={'homework-font-size'}>
            <Slider tooltipVisible={true} />
          </Form.Item>

          <Button htmlType={'submit'} onClick={submit}>提交</Button>
        </Form>
      </div>
    </Spin>
  );
}