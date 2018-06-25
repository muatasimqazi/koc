import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import Feature from './Feature';
import { FEATURES } from '../constants';

const styles = {
    container: {
        height: 250,
        padding: '50px',
    }
}
class Features extends Component {
    render() {
        return (
            <section style={styles.container}>
                <Container fluid>
                    <Row style={{ textAlign: 'center' }}>
                        {
                            FEATURES.map((feature, index) => (
                                <Feature feature={feature} index={index} key={index} />
                            ))
                        }
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Features;