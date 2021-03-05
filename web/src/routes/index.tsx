import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../utils/Header';
import Footer from '../utils/Footer';
import ScrollToTop from '../utils/ScrollToTop';

import { Landing } from './landing';
import { Login, SignUp } from './authentication';

const { Content } = Layout;

const Routes: FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Layout>
        <Layout>
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Content
            style={{
              minHeight: '100vh',
              paddingTop: '3rem',
              // display: "block",
              // marginLeft: "auto",
              // marginRight: "auto",
            }}
          >
            <ScrollToTop />
            <Switch>
              {/* <PrivateRoute path="/myRecipe" exact component={MyRecipe} /> */}
              <Route
                path="/login"
                exact
                render={(props) => (
                  <Login {...props} setLoggedIn={setLoggedIn} />
                )}
              />
              <Route
                path="/signup"
                exact
                render={(props) => (
                  <SignUp setLoggedIn={setLoggedIn} {...props} />
                )}
              />
              <Route exact path="/" component={Landing} />
            </Switch>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}
            >
              <Footer />
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
