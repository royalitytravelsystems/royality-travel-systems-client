import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router';
import Authorization from './Authorization';
import Header from './features/Header';

const Home = async () => {
  const component = await import('./features/Home');
  return component.default;
};

export class App extends Component {

  appJsx = () => {
    return(
      <Switch>
        <Route exact path='/' component={Authorization(Home)} />
        <Route path='/home' component={Authorization(Home)} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.appJsx()}
      </div>
    );
  }
}

export default withRouter(App);
