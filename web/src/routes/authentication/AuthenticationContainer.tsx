import * as React from 'react';
import { graphql, ChildMutateProps } from '@apollo/react-hoc';
import AuthenticationContext from './AuthenticationContext';

interface Props {
  children: React.ReactNode;
}

export class AuthenticationContainer extends React.PureComponent<Props> {
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
