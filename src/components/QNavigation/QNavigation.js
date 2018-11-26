import React, {Component} from 'react';
import QNavigationItem from '../QNavigationItem/QNavigationItem';
import './QNavigation.css';

class QNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQ: this.props.qNumber
        }
    }

    render() {
        return (
            <ul className="QNavigation">
                <QNavigationItem class="qnav qnav0" onClick={this.props.onClick} qNum={0} />
                <QNavigationItem class="qnav qnav1" onClick={this.props.onClick} qNum={1} />
                <QNavigationItem class="qnav qnav2" onClick={this.props.onClick} qNum={2} />
                <QNavigationItem class="qnav qnav3" onClick={this.props.onClick} qNum={3} />
                <QNavigationItem class="qnav qnav4" onClick={this.props.onClick} qNum={4} />
                <QNavigationItem class="qnav qnav5" onClick={this.props.onClick} qNum={5} />
                <QNavigationItem class="qnav qnav6" onClick={this.props.onClick} qNum={6} />
                <QNavigationItem class="qnav qnav7" onClick={this.props.onClick} qNum={7} />
                <QNavigationItem class="qnav qnav8" onClick={this.props.onClick} qNum={8} />
                <QNavigationItem class="qnav qnav9" onClick={this.props.onClick} qNum={9} />
                <QNavigationItem class="qnav qnav10" onClick={this.props.onClick} qNum={10} />
                <QNavigationItem class="qnav qnav11" onClick={this.props.onClick} qNum={11} />
                <QNavigationItem class="qnav qnav12" onClick={this.props.onClick} qNum={12} />
                <QNavigationItem class="qnav qnav13" onClick={this.props.onClick} qNum={13} />
                <QNavigationItem class="qnav qnav14" onClick={this.props.onClick} qNum={14} />
                <QNavigationItem class="qnav qnav15" onClick={this.props.onClick} qNum={15} />
                <QNavigationItem class="qnav qnav16" onClick={this.props.onClick} qNum={16} />
                <QNavigationItem class="qnav qnav17" onClick={this.props.onClick} qNum={17} />
                <QNavigationItem class="qnav qnav18" onClick={this.props.onClick} qNum={18} />
                <QNavigationItem class="qnav qnav19" onClick={this.props.onClick} qNum={19} />
                <QNavigationItem class="qnav qnav20" onClick={this.props.onClick} qNum={20} />
                <QNavigationItem class="qnav qnav21" onClick={this.props.onClick} qNum={21} />
                <QNavigationItem class="qnav qnav22" onClick={this.props.onClick} qNum={22} />
                <QNavigationItem class="qnav qnav23" onClick={this.props.onClick} qNum={23} />
                <QNavigationItem class="qnav qnav24" onClick={this.props.onClick} qNum={24} />
                <QNavigationItem class="qnav qnav25" onClick={this.props.onClick} qNum={25} />
                <QNavigationItem class="qnav qnav26" onClick={this.props.onClick} qNum={26} />
                <QNavigationItem class="qnav qnav27" onClick={this.props.onClick} qNum={27} />
                <QNavigationItem class="qnav qnav28" onClick={this.props.onClick} qNum={28} />
                <QNavigationItem class="qnav qnav29" onClick={this.props.onClick} qNum={29} />
                <QNavigationItem class="qnav qnav30" onClick={this.props.onClick} qNum={30} />
            </ul>
        );
    }
}

export default QNavigation;