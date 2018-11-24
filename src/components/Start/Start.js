import React, { Component } from 'react';
import './Start.css';
import Landing from '../Landing/Landing';
import Split from '../Split/Split';

class Start extends Component {

    render() {
        return (
        <div className="Start">
            <Landing />
            <Split />
        </div>
        );
    }
}

export default Start;
