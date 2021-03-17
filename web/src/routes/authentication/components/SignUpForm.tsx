import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { Formik, FormikHelpers } from 'formik';
import { SignUpSchema } from '../../../yup';
import { useAuthenticationContext } from '../AuthenticationController';

type FormValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type ErrorType = {
  path: string;
  message: string;
};

export const SignUpForm: React.FunctionComponent = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const {
    createUser,
    history,
    fetchMe,
    setLoggedIn,
  } = useAuthenticationContext();

  const onFinish = async (val: FormValues) => {
    try {
      const response = await createUser({
        variables: val,
      });
      console.log({ response });

      if (response?.data?.createUser) {
        message.success('Account created!');
        history.push({
          pathname: '/login',
        });
        return null;
      }
      response?.data?.login?.errors.map((e: ErrorType) =>
        message.error(e.message),
      );

      return null;
    } catch (err) {
      message.error('Sign up failed!');
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
      <h1>He</h1>
      <h1>He</h1>
      <div>
        <h1>SIGN IN</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
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
                  name="firstName"
                  label="First name"
                  labelCol={{ span: 24 }}
                  hasFeedback
                  labelAlign="left"
                  validateStatus={
                    touched.firstName && errors.firstName ? 'error' : ''
                  }
                  help={
                    touched.firstName && errors.firstName
                      ? errors.firstName
                      : ''
                  }
                >
                  <Input
                    value={values.firstName}
                    style={{
                      width: '100%',
                      padding: '0.25rem 0.75rem',
                      outline: 'none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John"
                  />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last name"
                  labelCol={{ span: 24 }}
                  hasFeedback
                  labelAlign="left"
                  validateStatus={
                    touched.lastName && errors.lastName ? 'error' : ''
                  }
                  help={
                    touched.lastName && errors.lastName ? errors.lastName : ''
                  }
                >
                  <Input
                    value={values.lastName}
                    style={{
                      width: '100%',
                      padding: '0.25rem 0.75rem',
                      outline: 'none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Doe"
                  />
                </Form.Item>
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
