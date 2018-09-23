import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import MainView from './components/Main';
import FAQ from './components/FAQ';
import Login from './components/Login';
import SignUp from './components/Signup';
import Footer from './components/Footer';
import { ROUTES } from './constants';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#02c397',
      dark: '#1c6ef9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Switch>
              <Route exact path={ROUTES.home} component={MainView} />
              <Route path={ROUTES.faq} component={FAQ} />
              <Route path={ROUTES.signUp} component={SignUp} />
              <Route path={ROUTES.logIn} component={Login} />
              <Redirect to={ROUTES.home} />
        </Switch>
        <Footer/>
        </MuiThemeProvider>
    );
  }
}

export default App;
