import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ROUTES } from '../constants';
import app from '../base';

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


const cities = [
    {
        name: 'San Francisco',
    },
    {
        name: 'Seattle',
    },
]
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            city: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    handleSignUp() {
        this.setState({ working: true });
        app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => user.updateProfile({
                displayName: this.state.name
            }))
            .catch(err => this.setState({ fberror: err }))
            .then(() => {
                this.setState({ working: false });
                this.props.history.push(ROUTES.home);
            });
    }

    render() {
        return (
            <Container>
                <Row style={styles.container}>
                    <Col sm={10}>
                        <SimpleCard title="Sign Up">
                            <form onSubmit={evt => this.handleSubmit(evt)}>
                                <TextField
                                    id="name"
                                    label="Your Name"
                                    onChange={this.handleChange('name')}
                                    placeholder="Your full name"
                                    value={this.state.name}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="email"
                                    label="Your email"
                                    name='email'
                                    onChange={this.handleChange('email')}
                                    placeholder="you@yourdomain.com"
                                    value={this.state.email}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    name='email'
                                    onChange={this.handleChange('password')}
                                    value={this.state.password}
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <TextField
                                    id="verifyPassword"
                                    label="Verify Password"
                                    value={this.state.password}
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <TextField
                                    id="select-city"
                                    select
                                    label="Select"
                                    value={this.state.city}
                                    onChange={this.handleChange('city')}
                                    helperText="Please select your city"
                                    margin="normal"
                                >
                                    {cities.map(option => (
                                        <MenuItem key={option.name} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </form>
                            <Button onClick={this.handleSignUp} size="large" variant="contained" color="primary" style={{ marginTop: 20 }}>Sign Up</Button>
                        </SimpleCard>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignUp;