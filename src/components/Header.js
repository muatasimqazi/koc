import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
  };

class Header extends Component {
    render() {
        return (
            <div style={styles.root}>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <Typography variant="title" color="inherit" style={styles.flex}>
                        King of Castle
                    </Typography>
                    <Button color="inherit" component={Link} to={ROUTES.faq}>FAQ</Button>
                    <Button color="inherit" component={Link} to={ROUTES.signUp}>Sign Up</Button>
                    <Button color="inherit" component={Link} to={ROUTES.logIn}>Login</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Header;