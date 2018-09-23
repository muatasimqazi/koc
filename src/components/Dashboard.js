import React, { Component } from 'react';
import PaperCard from './PaperCard';
import { List, Divider } from '@material-ui/core';
import { Row, Col } from 'react-grid-system';
import User from './User';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row style={{margin: 0}}>
                    <Col sm={9}>
                        <PaperCard
                            slug="Settings"
                            title="Manage Users"
                        >
                            <List>
                                {[1, 2, 3, 4, 5, 6].map(user => (
                                    <React.Fragment>
                                        <User name={`User Name is ${user}`} key={user} />
                                        <Divider />
                                    </React.Fragment>
                                ))}
                            </List>
                        </PaperCard>
                    </Col>
                    <Col sm={3}>
                        <PaperCard
                            slug="Additional Settings"
                            title="Users"
                        >

                        </PaperCard>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;