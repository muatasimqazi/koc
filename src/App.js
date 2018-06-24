import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './components/Header';
import MainView from './components/Main';
import FAQ from './components/FAQ';
import Login from './components/Login';
import SignUp from './components/Signup';
import { ROUTES } from './constants';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
              <Route exact path={ROUTES.home} component={MainView} />
              <Route path={ROUTES.faq} component={FAQ} />
              <Route path={ROUTES.signUp} component={SignUp} />
              <Route path={ROUTES.logIn} component={Login} />
              <Redirect to={ROUTES.home} />
        </Switch>
      </div>
    );
  }
}

export default App;
