/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { Form, Input, Button, Row, Col } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  export const Demo = () => {
    const onFinish = (values) => {
      console.log(values);
    };

    return (
      <><Row>
        <Col span={18} push={6}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
              {
                required: true,
              },
            ]}
        >
          <Input />
        </Form.Item>
          <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
              {
                type: 'email',
              },
            ]}
        >
          <Input />
        </Form.Item>
          <Form.Item name={['user', 'object']} label="Object">
          <Input />
        </Form.Item>
          <Form.Item name={['user', 'message']} label="Message">
          <Input.TextArea />
        </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
              Submit
            </Button>
        </Form.Item>
            </Form>
        </Col>
        <Col span={6} pull={18}>
        </Col>
      </Row>
      </>
    );
  };

