import {Button, Form, Input, Modal, notification, Spin} from 'antd';
import {useEffect, useState} from 'react';
import {subject_name, subjects} from '../components/homework';
import {fetch} from '../utils/fetch';

export default function HomeworkEditPage() {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchSource = async () => {
      let json = await fetch('/homework', subject_name);

      if (json['success'] === 1) {
        setLoading(false);
        form.setFieldsValue(json.data);
      }
    };

    fetchSource();
  }, []);

  async function submit() {
    let data = form.getFieldsValue();

    data = Object.keys(data).reduce((result, key) => {
      data[key] = data[key] === undefined ? '' : data[key];
      return result;
    }, data);

    console.log(data)

    await fetch('/homework', data, 'post');
    notification.success({message: '提交成功'});
  }

  function reset() {
    Modal.confirm({
      title: '确定要清空作业吗？',
      async onOk() {
        form.resetFields();

        setTimeout(async () => {await submit()}, 1000);
        notification.success({message: '清除成功'});
      },
    });
  }

  return (
      <Spin spinning={loading} size={'large'}>
        <div className={'wrapper'}>
          <h1 style={{textAlign: 'center'}}>作业编辑</h1>
          <Form layout={'vertical'} form={form}
                style={{textAlign: 'right', width: '40vw', margin: '0 auto'}}>
            {subjects.map((i) => (
                <Form.Item key={i} label={subject_name[i]} name={i}>
                  <Input.TextArea autoSize/>
                </Form.Item>
            ))}

            <Form.Item>
              <Button.Group>
                <Button onClick={reset}>清空</Button>
                <Button onClick={submit} htmlType={'submit'}>
                  提交
                </Button>
              </Button.Group>
            </Form.Item>
          </Form>
        </div>
      </Spin>
  );
}
