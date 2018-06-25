import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

class Testimony extends Component {
    render() {
        const { testimony } = this.props;
        return (
            <Col sm={4}>
                <h4>{testimony.title}</h4>
            </Col>
        );
    }
}

export default Testimony;