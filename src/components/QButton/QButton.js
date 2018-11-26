import React, {Component} from 'react';
import './QButton.css';

class QButton extends Component {
    render() {
        return (
            <button className={this.props.class} onClick={this.props.onClick}>{this.props.qNumber === 0 && this.props.back === false ? "Lets Start!" : this.props.qNumber !== 0 && this.props.back === false ? "Next Question" : this.props.qNumber !== 0 && this.props.back === true ? "Previous Question" : null}</button>
        );
    }
}

export default QButton;