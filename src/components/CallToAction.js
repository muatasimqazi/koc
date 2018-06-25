import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pattern from '../images/pattern.png';
import { Container } from 'react-grid-system';
import { Button } from '@material-ui/core';

const styles = {
    background: {
        background: `url(${pattern})`,
        padding: '80px 0px',
        backgroundSize: 'contain',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5em',
        marginTop: '0',
        marginBottom: '0.5em',
        color: '#4184f6',
        fontWeight: 500,
    },
    text: {
        fontFamily: 'Montserrat", Sans-serif',
    }
}
class CallToAction extends Component {
    render() {
        return (
            <div style={styles.background}>
                <Container>
                    <h2 style={styles.title}>The job you've been dreaming about</h2>
                    <p style={styles.text}>Create your profile in minutes...</p>
                    <Button variant="contained" size="large" color="primary" style={styles.button} component={Link} to="/signup">
                        Get Started
                    </Button>
                </Container>
            </div>
        );
    }
}

export default CallToAction;