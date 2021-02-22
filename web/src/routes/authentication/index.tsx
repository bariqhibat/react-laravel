import * as React from 'react';
import { AuthenticationContainer } from './AuthenticationContainer';
import { Login } from './components/LoginView';

export class Authentication extends React.PureComponent {
  onFinish = async (val: any) => {
    console.log({ val });
    return null!;
  };

  render() {
    return (
      <AuthenticationContainer>
        <Login submit={this.onFinish} />
      </AuthenticationContainer>
    );
  }
}
