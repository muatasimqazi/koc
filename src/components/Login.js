import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SimpleCard from './SimpleCard';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    item: {
    },
    social: {
        padding: '6px 0',
        height: '2.5rem',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 200,
        borderRadius: 3,
        marginBottom: 10,
        lineHeight: '2.5rem'
    },
    facebook: {
        background: '#3b5998',
    },
    google: {
        background: '#d34836',
    },
    icon: {
        fontSize: '1.5em',
        marginRight: 10,
        verticalAlign: 'middle'
    }
}
class Login extends Component {
    render() {
        return (
            <Container debug>
                <Row style={styles.container}>
                    <Col sm={6}>
                        <SimpleCard title="Welcome Back" button="Login">
                            <Paper style={{ ...styles.social, ...styles.facebook }} elevation={0}><span style={styles.icon} className="fab fa-facebook-square"></span>Login with Facebook</Paper>
                            <Paper style={{ ...styles.social, ...styles.google }} elevation={0}><span style={styles.icon} className="fab fa-google-plus-square"></span>Login with Google</Paper>
                            <Button size="medium" variant="contained" color="primary">Login</Button>
                            <p><a href="/">Lost Password</a></p>
                        </SimpleCard>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;