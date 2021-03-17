import { gql } from '@apollo/client';

export const EMAIL_SIGNUP = gql`
  mutation EMAIL_SIGNUP(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const EMAIL_LOGIN = gql`
  mutation EMAIL_LOGIN($input: LoginInput) {
    login(input: $input) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        id
        email
      }
    }
  }
`;
