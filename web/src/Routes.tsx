import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Authentication } from './routes/authentication';
import { Landing } from './routes/landing';

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Authentication} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}
