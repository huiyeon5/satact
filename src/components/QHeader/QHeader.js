import React, {Component} from 'react';

class QHeader extends Component {
    render() {
        return (
            <header className="QHeader">
                <span className="qheader">{this.props.qNumber === 0 ? "Before we start.." : `Question ${this.props.qNumber}`}</span>
            </header>
        );
    }
}

export default QHeader;