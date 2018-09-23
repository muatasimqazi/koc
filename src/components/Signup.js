import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
        this.state = {
            name: '',
            email: '',
            password: '',
            city: ''
        }
    } 

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = event => {
        alert();
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
                                    placeholder="Your full name"
                                    value={this.state.name}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="email"
                                    label="Your email"
                                    placeholder="you@yourdomain.com"
                                    value={this.state.name}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    value={this.state.name}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    id="verifyPassword"
                                    label="Verify Password"
                                    value={this.state.name}
                                    margin="normal"
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
                            <Button size="large" variant="contained" color="primary" style={{marginTop: 20}}>Sign Up</Button>
                        </SimpleCard>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignUp;