import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import Guide from './Guide';
import { GUIDES } from '../constants';

const styles = {
    container: {
        background: '#f9f9f9',
        padding: '50px 0px 0px 0px',
    },
}
class GuidesView extends Component {
    render() {
        return (
            <section style={styles.container}>
                <Container>
                        {
                            GUIDES.map((guide, index) => (
                                <Guide guide={guide} index={index} key={index}/>
                            ))
                        }
                        
                </Container>
            </section>
        );
    }
}

export default GuidesView;