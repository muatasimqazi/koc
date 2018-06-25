import React, { Component } from 'react';
import Hero from './Hero';
import Features from './Features';
import GuidesView from './Guides';
import Testimonies from './Testimonies';
import CallToAction from './CallToAction';

class MainView extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Features />
                <GuidesView/>
                <Testimonies/>
                <CallToAction/>
            </div>
        );
    }
}

export default MainView;