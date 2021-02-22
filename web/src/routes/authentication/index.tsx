import * as React from 'react';
import { gql } from '@apollo/client';
import { graphql, ChildMutateProps } from '@apollo/react-hoc';
import { AuthenticationContainer } from './AuthenticationContainer';
import { Login } from './components/LoginView';

const booksQuery = gql`
  {
    books {
      id
      title
    }
  }
`;
class C extends React.PureComponent {
  onFinish = async (val: any) => {
    console.log({ val });
    return null!;
  };

  render() {
    console.log(this.props);
    return (
      <AuthenticationContainer>
        <Login submit={this.onFinish} />
      </AuthenticationContainer>
    );
  }
}

export const Authentication = graphql(booksQuery)(C);
