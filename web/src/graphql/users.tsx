import { gql } from '@apollo/client';

export const EMAIL_SIGNUP = gql`
  mutation EMAIL_SIGNUP(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    ok
    errors {
      path
      message
    }
    user {
      email
      firstName
      lastName
    }
  }
`;

export const EMAIL_LOGIN = gql`
  mutation EMAIL_LOGIN($email: String!, $password: String!) {
    ok
    errors {
      path
      message
    }
    refreshToken
    token
  }
`;
