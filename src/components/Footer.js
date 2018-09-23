import React from 'react';
import { Row, Col } from 'react-grid-system';

const styles = {
    footer: {
        minHeight: 105,
        background: '#161616',
        color: '#FFF',
        padding: 20,
    }
}
const date = new Date().getFullYear();
const Footer = () => (
            <div style={styles.footer}>
            <Row>
                <Col sm={12} style={{"textAlign": "center", "top": 70}}>
                    <p>© {date} Copyright: Cerinfo</p>
                </Col>
            </Row>
            </div>
        );

export default Footer;