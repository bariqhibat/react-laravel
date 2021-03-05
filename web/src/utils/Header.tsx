import React, { FunctionComponent } from 'react';
import { Layout, Space, Row } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// ! HOC of withRouter
type HeaderProps = RouteComponentProps & {
  loggedIn: boolean;
  setLoggedIn: any;
};

const { Header: HeaderAntd } = Layout;

const Header: FunctionComponent<HeaderProps> = ({
  history,
  loggedIn,
  setLoggedIn,
}: HeaderProps) => {
  return (
    <HeaderAntd
      style={{
        background: '#16a085',
        position: 'fixed',
        zIndex: 10,
        height: '3rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '0 30px',
      }}
    >
      <div className="--max-height --flex">
        {/* eslint-disable-next-line */}
        <h3
          onClick={() => history.push('/')}
          style={{
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Freelance.SG
        </h3>
      </div>
      <Space className="--max-height">
        <br />
      </Space>

      <Row justify="end">
        {loggedIn && (
          <>
            {/* eslint-disable-next-line */}
            <div
              onClick={() => {
                history.push('/myRecipe');
              }}
            >
              <h3
                style={{
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                My profile
              </h3>
            </div>
          </>
        )}
        <div style={{ padding: '0 1rem' }} />
        {/* eslint-disable-next-line */}
        <div
          onClick={() => {
            if (loggedIn) {
              setLoggedIn(false);
              localStorage.setItem('token', '');
              localStorage.setItem('refreshToken', '');
            }
            history.push('/login');
          }}
        >
          <h3
            style={{
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {loggedIn ? 'Logout' : 'Login'}
          </h3>
        </div>
      </Row>
    </HeaderAntd>
  );
};

export default withRouter(Header);
