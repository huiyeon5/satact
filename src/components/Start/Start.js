import React, { Component } from 'react';
import './Start.css';
import Landing from '../Landing/Landing';
import Split from '../Split/Split';
import Donghyun from '../Donghyun/Donghyun'

class Start extends Component {

    render() {
        return (
        <div className="Start">
            <Landing />
            <Split />
            <Donghyun />
        </div>
        );
    }
}

export default Start;
