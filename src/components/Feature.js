import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';

const styles = {
    description: {
        fontSize: '17px',
        color: '#756f6f',
        lineHeight: '1.8em',
        textAlign: 'left',
        padding: '5px, 25px',
    },
}
class Feature extends Component {
    render() {
        const { feature } = this.props;
        return (
            <Col sm={4}>
                <h4>{feature.title}</h4>
                <p style={styles.description}>{feature.description}</p>
                <Button variant="contained" color="primary">Learn More</Button>
            </Col>
        );
    }
}

export default Feature;