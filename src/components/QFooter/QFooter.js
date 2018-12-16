import React, {Component} from 'react';
import QButton from '../QButton/QButton';
import './QFooter.css';

class QFooter extends Component {
    render() {
        return (
            <footer className="QFooter">
                { this.props.qNumber === 0 ? null : <QButton class={"qbutton qbutton1"} qNumber={this.props.qNumber} onClick={this.props.goBack} back={true}/>}
                { this.props.qNumber === 30 ? null : <QButton class={"qbutton qbutton2"} qNumber={this.props.qNumber} onClick={this.props.goForward} back={false}/>}
                { this.props.qNumber === 30 ? <QButton class={"qbutton resultbutton"} text={"Submit!"} qNumber={this.props.qNumber} onClick={this.props.goToResult} back={false}/> : null}
            </footer>
        );
    }
}


export default QFooter;