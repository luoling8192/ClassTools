import { subject_name, subjects } from '@/components/homework';
import '@/styles/global.less';
import styles from '@/styles/HomeworkEdit.less';
import { fetch } from '@/utils/fetch';
import { Button, Form, Input, Modal, notification, Spin } from 'antd';
import { useEffect, useState } from 'react';

function SingleHomeworkItem({
  subject,
  homework,
}: {
  subject: string;
  homework: string;
}) {
  return (
    <Form.Item label={subject_name[subject]} name={subject}>
      <Input.TextArea rows={1} value={homework} />
    </Form.Item>
  );
}

export default function HomeworkEditPage() {
  const [loading, setLoading] = useState(true);
  const [homework, setHomework] = useState(subject_name);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchSource = async () => {
      let json: any = await fetch('/homework', subject_name);
      setHomework(json.data);
      setLoading(false);
    };

    fetchSource();
  }, []);

  async function submit() {
    const data = form.getFieldsValue();
    await fetch('/homework', data, 'post');
    notification.success({ message: '提交成功' });
  }

  async function reset() {
    Modal.confirm({
      title: '确定要清空作业吗？',
      async onOk() {
        form.resetFields();
        await submit();
        notification.success({ message: '清除成功' });
      },
    });
  }

  return (
    <Spin spinning={loading} size={'large'}>
      <div className={'wrapper'}>
        <h1 style={{ textAlign: 'center' }}>作业编辑</h1>
        <Form layout={'vertical'} form={form} className={styles.form}>
          {subjects.map((i) => (
            <SingleHomeworkItem key={i} subject={i} homework={homework[i]} />
          ))}

          <Form.Item style={{ textAlign: 'right' }}>
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
