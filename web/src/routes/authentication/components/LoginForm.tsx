import React, { ContextType, FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import AuthenticationContext from '../AuthenticationContext';

export const LoginForm: FunctionComponent = () => {
  //   const { login, history, fetchMe, setLoggedIn } = useContext(
  //     AuthenticationContext,
  //   );

  // const onFinish = async (val) => {
  //   try {
  //     const response = await login({
  //       variables: {
  //         email: val.email,
  //         password: val.password,
  //       },
  //     });

  //     if (response?.data?.login?.ok) {
  //       await fetchMe({
  //         variables: {
  //           userUUID: response?.data.login.user._id,
  //         },
  //       });
  //       setLoggedIn(true);
  //       const { token, refreshToken } = response?.data?.login;
  //       // set tokens
  //       localStorage.setItem('token', token);
  //       localStorage.setItem('refreshToken', refreshToken);

  //       history.push({
  //         pathname: '/myRecipe',
  //         state: {
  //           justLogin: true,
  //         },
  //       });
  //       return null;
  //     }
  //     response?.data?.login?.errors.map((e) => message.error(e.message));

  //     return null;
  //   } catch (err) {
  //     message.error('Login failed!');
  //   }

  //   return null;
  // };

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
          <Form
            // onFinish={onFinish}
            layout="vertical"
            style={{ padding: '1rem 0' }}
          >
            <Form.Item
              name="email"
              label="Email"
              labelCol={{ span: 24 }}
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Wrong email format',
                },
              ]}
            >
              <Input
                style={{
                  width: '100%',
                  padding: '0.25rem 0.75rem',
                  outline: 'none',
                }}
                placeholder="john@john.com"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '0.25rem 0.75rem',
                  outline: 'none',
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>

        <Link to="/signup" style={{ color: '#F9642D' }}>
          <strong>Sign up instead</strong>
        </Link>
      </div>
    </div>
  );
};
