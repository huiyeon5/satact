import React, {Component} from 'react';
import './Split.css';
import Half from '../Half/Half';

class Split extends Component {
    render(){
        return (
            <div className="Split">
                <Half type="SAT"/>
                <Half type="ACT"/>
            </div>
        );
    }
}

export default Split;