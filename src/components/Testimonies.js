import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import Testimony from './Feature';
import { TESTIMONIES } from '../constants';

const styles = {
    container: {
        height: 250,
        padding: '50px',
    }
}
class Testimonies extends Component {
    render() {
        return (
            <section style={styles.container}>
                <Container fluid>
                    <Row style={{ textAlign: 'center' }}>
                        {
                            TESTIMONIES.map((feature, index) => (
                                <Testimony feature={feature} index={index} key={index} />
                            ))
                        }
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Testimonies;