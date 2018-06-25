import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

const styles = {
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Montserrat, Sans-serif',
        padding: '50px 0px 0px 0px',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    guide: {
        fontWeight: 400,
        fontSize: '44px',
        color: '#444444',
        margin: 0,

    },
    description: {
        fontSize: '17px',
        color: '#d1d1d1',
        lineHeight: '1.8em',
    },
    divider: {
        padding: '25px 0',
    },
    separator: {
        borderTopStyle: 'solid',
        borderTopWidth: '5px',
        borderTopColor: '#4184f6',
        width: '20%',
        display: 'inline-block',
    },
    icon: {
        fontSize: '150px',
        color: '#d1d1d1',
        padding: '20, 40px',
        textAlign: 'right',
        margin: '0, 100px',
    }

}

class Guide extends Component {
    render() {
        const { guide, index } = this.props;
        const reverse = index % 2 !== 0 ? 'row-reverse' : undefined;
        return (
            <Row className="flex-reverse" style={{...styles.flexContainer, flexDirection: reverse}}>
                <Col sm={5} style={styles.flex}>
                    <div>
                        <div style={styles.divider}>
                            <span style={styles.separator}></span>
                        </div>
                        <h2 style={styles.guide}>{guide.title}</h2>
                        <p style={styles.description}>{guide.description}</p>
                    </div>
                </Col>
                <Col sm={5} style={styles.flex}>
                    <i className={guide.icon} style={styles.icon}></i>
                </Col>
            </Row>
        );
    }
}

export default Guide;