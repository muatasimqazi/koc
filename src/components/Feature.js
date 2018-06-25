import React, { Component } from 'react';
import { Col } from 'react-grid-system';

class Feature extends Component {
    render() {
        const { feature } = this.props;
        return (
            <Col sm={4}>
                <h4>{feature.title}</h4>
            </Col>
        );
    }
}

export default Feature;