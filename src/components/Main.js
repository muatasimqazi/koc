import React, { Component } from 'react';
import Hero from './Hero';
import Features from './Features';
import GuidesView from './Guides';

class MainView extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Features />
                <GuidesView/>
            </div>
        );
    }
}

export default MainView;