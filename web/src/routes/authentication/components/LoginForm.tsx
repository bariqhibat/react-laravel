import * as React from 'react';
import { Link } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { Form, Input, Button, message } from 'antd';
import { useAuthenticationContext } from '../AuthenticationController';
import { LoginSchema } from '../../../yup';

type FormValues = {
  email: string;
  password: string;
};

type ErrorType = {
  path: string;
  message: string;
};

export const LoginForm: React.FunctionComponent = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const { login, history, setLoggedIn } = useAuthenticationContext();

  const onFinish = async (val: FormValues) => {
    try {
      console.log({ val });
      const response = await login({
        variables: {
          input: {
            username: val.email,
            password: val.password,
          },
        },
      });

      console.log({ response });
      if (response?.data?.login) {
        setLoggedIn(true);
        const {
          access_token: token,
          refresh_token: refreshToken,
        } = response?.data?.login;
        // set tokens
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        history.push({
          pathname: '/',
          state: {
            justLogin: true,
          },
        });
        return null;
      }
      response?.data?.login?.errors.map((e: ErrorType) =>
        message.error(e.message),
      );

      return null;
    } catch (err) {
      message.error('Login failed!');
    }

    return null;
  };

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div>
        <h1>SIGN IN</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={async (
              values: FormValues,
              { setSubmitting }: FormikHelpers<FormValues>,
            ) => {
              await onFinish(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <Form
                // onFinish={onFinish}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ padding: '1rem 0' }}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  labelCol={{ span: 24 }}
                  hasFeedback
                  labelAlign="left"
                  validateStatus={touched.email && errors.email ? 'error' : ''}
                  help={touched.email && errors.email ? errors.email : ''}
                >
                  <Input
                    value={values.email}
                    style={{
                      width: '100%',
                      padding: '0.25rem 0.75rem',
                      outline: 'none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@john.com"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  labelCol={{ span: 24 }}
                  hasFeedback
                  labelAlign="left"
                  validateStatus={
                    touched.password && errors.password ? 'error' : ''
                  }
                  help={
                    touched.password && errors.password ? errors.password : ''
                  }
                >
                  <Input.Password
                    placeholder="Password"
                    style={{
                      width: '100%',
                      padding: '0.25rem 0.75rem',
                      outline: 'none',
                    }}
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </div>

        <Link to="/signup" style={{ color: '#F9642D' }}>
          <strong>Sign up instead</strong>
        </Link>
      </div>
    </div>
  );
};
