import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router';
import Authorization from './Authorization';
import HeaderContainer from './features/Header';
import FooterContainer from './features/Footer';

const Home = async () => {
  const component = await import('./features/Home');
  return component.default;
};

const AboutComponent = async () => {
  const component = await import('./features/About');
  return component.default;
};

export class App extends Component {

  appJsx = () => {
    return(
      <Switch>
        <Route exact path='/' component={Authorization(Home)} />
        <Route path='/home' component={Authorization(Home)} />
        <Route path='/about' component={Authorization(AboutComponent)} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.appJsx()}
        <FooterContainer />
      </div>
    );
  }
}

export default withRouter(App);
