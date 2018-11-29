import React, {Component} from 'react';
import QNavigationItem from '../QNavigationItem/QNavigationItem';
import './QNavigation.css';

class QNavigation extends Component {
    render() {
        return (
            <ul className="QNavigation">
                <div className="q qnavpart1">
                    <QNavigationItem class={this.props.qNumber === 1 ? "qnav qnav1 active" : "qnav qnav1"} onClick={this.props.onClick} qNum={1} />
                    <QNavigationItem class={this.props.qNumber === 2 ? "qnav qnav2 active" : "qnav qnav2"} onClick={this.props.onClick} qNum={2} />
                    <QNavigationItem class={this.props.qNumber === 3 ? "qnav qnav3 active" : "qnav qnav3"} onClick={this.props.onClick} qNum={3} />
                    <QNavigationItem class={this.props.qNumber === 4 ? "qnav qnav4 active" : "qnav qnav4"} onClick={this.props.onClick} qNum={4} />
                    <QNavigationItem class={this.props.qNumber === 5 ? "qnav qnav5 active" : "qnav qnav5"} onClick={this.props.onClick} qNum={5} />
                    <QNavigationItem class={this.props.qNumber === 6 ? "qnav qnav6 active" : "qnav qnav6"} onClick={this.props.onClick} qNum={6} />
                    <QNavigationItem class={this.props.qNumber === 7 ? "qnav qnav7 active" : "qnav qnav7"} onClick={this.props.onClick} qNum={7} />
                    <QNavigationItem class={this.props.qNumber === 8 ? "qnav qnav8 active" : "qnav qnav8"} onClick={this.props.onClick} qNum={8} />
                    <QNavigationItem class={this.props.qNumber === 9 ? "qnav qnav9 active" : "qnav qnav9"} onClick={this.props.onClick} qNum={9} />
                    <QNavigationItem class={this.props.qNumber === 10 ? "qnav qnav10 active" : "qnav qnav10"} onClick={this.props.onClick} qNum={10} />
                </div>
                <div className="q qnavpart2">
                    <QNavigationItem class={this.props.qNumber === 11 ? "qnav qnav11 active" : "qnav qnav11"} onClick={this.props.onClick} qNum={11} />
                    <QNavigationItem class={this.props.qNumber === 12 ? "qnav qnav12 active" : "qnav qnav12"} onClick={this.props.onClick} qNum={12} />
                    <QNavigationItem class={this.props.qNumber === 13 ? "qnav qnav13 active" : "qnav qnav13"} onClick={this.props.onClick} qNum={13} />
                    <QNavigationItem class={this.props.qNumber === 14 ? "qnav qnav14 active" : "qnav qnav14"} onClick={this.props.onClick} qNum={14} />
                    <QNavigationItem class={this.props.qNumber === 15 ? "qnav qnav15 active" : "qnav qnav15"} onClick={this.props.onClick} qNum={15} />
                    <QNavigationItem class={this.props.qNumber === 16 ? "qnav qnav16 active" : "qnav qnav16"} onClick={this.props.onClick} qNum={16} />
                    <QNavigationItem class={this.props.qNumber === 17 ? "qnav qnav17 active" : "qnav qnav17"} onClick={this.props.onClick} qNum={17} />
                    <QNavigationItem class={this.props.qNumber === 18 ? "qnav qnav18 active" : "qnav qnav18"} onClick={this.props.onClick} qNum={18} />
                    <QNavigationItem class={this.props.qNumber === 19 ? "qnav qnav19 active" : "qnav qnav19"} onClick={this.props.onClick} qNum={19} />
                    <QNavigationItem class={this.props.qNumber === 20 ? "qnav qnav20 active" : "qnav qnav20"} onClick={this.props.onClick} qNum={20} />
                </div>
                <div className="q qnavpart3">
                    <QNavigationItem class={this.props.qNumber === 21 ? "qnav qnav21 active" : "qnav qnav21"} onClick={this.props.onClick} qNum={21} />
                    <QNavigationItem class={this.props.qNumber === 22 ? "qnav qnav22 active" : "qnav qnav22"} onClick={this.props.onClick} qNum={22} />
                    <QNavigationItem class={this.props.qNumber === 23 ? "qnav qnav23 active" : "qnav qnav23"} onClick={this.props.onClick} qNum={23} />
                    <QNavigationItem class={this.props.qNumber === 24 ? "qnav qnav24 active" : "qnav qnav24"} onClick={this.props.onClick} qNum={24} />
                    <QNavigationItem class={this.props.qNumber === 25 ? "qnav qnav25 active" : "qnav qnav25"} onClick={this.props.onClick} qNum={25} />
                    <QNavigationItem class={this.props.qNumber === 26 ? "qnav qnav26 active" : "qnav qnav26"} onClick={this.props.onClick} qNum={26} />
                    <QNavigationItem class={this.props.qNumber === 27 ? "qnav qnav27 active" : "qnav qnav27"} onClick={this.props.onClick} qNum={27} />
                    <QNavigationItem class={this.props.qNumber === 28 ? "qnav qnav28 active" : "qnav qnav28"} onClick={this.props.onClick} qNum={28} />
                    <QNavigationItem class={this.props.qNumber === 29 ? "qnav qnav29 active" : "qnav qnav29"} onClick={this.props.onClick} qNum={29} />
                    <QNavigationItem class={this.props.qNumber === 30 ? "qnav qnav30 active" : "qnav qnav30"} onClick={this.props.onClick} qNum={30} />
                </div>
            </ul>
        );
    }
}

export default QNavigation;