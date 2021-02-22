import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { FormikErrors, withFormik, FormikProps } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues>>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleChange, handleBlur, handleSubmit, values } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          <Form
            onSubmitCapture={handleSubmit}
            onBlur={handleBlur}
            onChange={handleChange}
            initialValues={values}
          >
            <Form.Item label="email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password">
              <Input type="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            ;
          </Form>
        </div>
      </div>
    );
  }
}

export const Login = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
