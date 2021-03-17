import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { EMAIL_SIGNUP, EMAIL_LOGIN, ME_QUERY } from "../../graphql/Users";

import { EMAIL_LOGIN, EMAIL_SIGNUP } from '../../graphql/users';

type ContainerProps = RouteComponentProps & {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

type AuthenticationContextType = ContainerProps & {
  loading: boolean;
  history: RouteComponentProps;
  createUser: any;
  login: any;
};

const AuthenticationContext = React.createContext({});

const Container: FunctionComponent<ContainerProps> = ({
  history,
  setLoggedIn,
  ...props
}) => {
  let loading = true;
  let error = null;

  const { children } = props;

  // Get params from routes
  // eslint-disable-next-line

  // Run queries

  // GQL mutations
  const [
    createUser,
    { loading: createUserLoading, error: createUserError },
  ] = useMutation(EMAIL_SIGNUP);

  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    EMAIL_LOGIN,
  );

  // const [
  //   fetchMe,
  //   {
  //     // data: { meQuery: { user } = {} } = {},
  //     loading: meQueryLoading,
  //     error: meQueryError,
  //   },
  // ] = useLazyQuery(ME_QUERY);

  try {
    loading = createUserLoading || loginLoading;

    // Error view
    error = createUserError || loginError;

    if (error) {
      throw error;
    }

    return (
      <AuthenticationContext.Provider
        value={
          {
            setLoggedIn,
            history,
            loading,
            // Hooks
            // Data from server
            // fetchMe,
            // Mutation
            createUser,
            login,
          } as AuthenticationContextType
        }
      >
        {children}
      </AuthenticationContext.Provider>
    );
    // eslint-disable-next-line
  } catch (error) {
    return (
      <Redirect
        to={{
          pathname: '/500',
          state: { error },
        }}
      />
    );
  }
};

export const useAuthenticationContext = () => {
  const context: AuthenticationContextType | any = useContext(
    AuthenticationContext,
  );
  return context;
};

export const AuthenticationController = withRouter(Container);
