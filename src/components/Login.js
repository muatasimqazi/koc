import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SimpleCard from './SimpleCard';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
    },
    divider: {
        borderBottom: '1px solid #ebeef1',
        display: 'inline-block',
        width: '40%'

    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        return (
            <Container>
                <Row style={styles.container}>
                    <Col sm={6}>
                        <SimpleCard title="Welcome Back">
                            <Paper style={{ ...styles.social, ...styles.facebook }} elevation={0}><span style={styles.icon} className="fab fa-facebook-square"></span>Login with Facebook</Paper>
                            <Paper style={{ ...styles.social, ...styles.google }} elevation={0}><span style={styles.icon} className="fab fa-google-plus-square"></span>Login with Google</Paper>
                            <div style={{ textAlign: 'center', padding: 10, color: 'grey' }}><span style={styles.divider}></span> or <span style={styles.divider}></span></div>
                            <form>
                                <TextField
                                    id="username"
                                    label="Username or email address"
                                    value={this.state.username}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    value={this.state.password}
                                    margin="normal"
                                    fullWidth
                                />
                                <Button size="large" variant="contained" color="primary" style={{marginTop: 20}}>Login</Button>
                            </form>
                            <p><a href="/">Lost Password</a></p>
                        </SimpleCard>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;