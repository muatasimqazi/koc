import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HeroImage from '../images/hero.jpg';

const styles = {
    hero: {
        width: '100vw',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFF'
    },
    heroTitle: {
        fontSize: '2.5em',
        marginTop: '0',
        marginBottom: '0.5em',
    },
    heroInner: {

    },
    heroTag: {
        fontWeight: 300,
    },
    button: {
        boxShadow: 'none',
    }
}

const Hero = () => (
            <section style={styles.hero}>
                <div style={styles.heroInner}>
                    <h1 style={styles.heroTitle}>Welcome to King of Castle</h1>
                    <h2 style={styles.heroTag}>A service that connects you with this</h2>
                    <Button variant="contained" size="large" color="primary" style={styles.button} component={Link} to="/signup">
                        Get Started
                    </Button>
                </div>
            </section>
        );

export default Hero