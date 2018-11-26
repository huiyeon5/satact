import React, {Component} from 'react';
import './QNavigationItem.css';

class QNavigationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQ: this.props.qNumber,
            
        }
    }

    render() {
        return (
            <li className={this.props.class} onClick={() => this.props.onClick(this.props.qNum)}>{this.props.qNum === 0 ? "0" : this.props.qNum}</li>
        );
    }
}

export default QNavigationItem;