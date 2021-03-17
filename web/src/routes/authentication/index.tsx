import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { Card } from 'antd';
import { AuthenticationController } from './AuthenticationController';

import { SignUpForm } from './components/SignUpForm';
import { LoginForm } from './components/LoginForm';

type Props = {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  jestMock?: (arg0: string) => void;
};

export const Login: FunctionComponent<Props> = ({
  setLoggedIn,
  jestMock,
}: Props) => {
  if (jestMock) jestMock('login rendered!');
  return (
    <AuthenticationController setLoggedIn={setLoggedIn}>
      <div
        style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            width: '85%',
            maxWidth: '500px',
            height: 'fit-content',
            padding: '2rem',
            border: '1px solid white',
          }}
        >
          <LoginForm />
        </Card>
      </div>
    </AuthenticationController>
  );
};

Login.defaultProps = {
  jestMock: () => console.log(),
};

export const SignUp: FunctionComponent<Props> = ({
  setLoggedIn,
  jestMock,
}: Props) => {
  if (jestMock) jestMock('signUp rendered!');
  return (
    <AuthenticationController setLoggedIn={setLoggedIn}>
      <div
        style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            width: '85%',
            maxWidth: '500px',
            height: 'fit-content',
            padding: '2rem',
            border: '1px solid white',
          }}
        >
          <SignUpForm />
        </Card>
      </div>
    </AuthenticationController>
  );
};
