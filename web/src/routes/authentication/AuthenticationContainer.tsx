import * as React from 'react';
import AuthenticationContext from './AuthenticationContext';

interface ContainerProps {
  children: React.ReactNode;
}

export class AuthenticationContainer extends React.PureComponent<ContainerProps> {
  render() {
    const { children } = this.props;
    const loading = false;
    return (
      <div>
        <div>Hello</div>
        <AuthenticationContext.Provider value={loading}>
          {children}
        </AuthenticationContext.Provider>
      </div>
    );
  }
}
