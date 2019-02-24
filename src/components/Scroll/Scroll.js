import React, {Component} from 'react';
import './Scroll.css';

class Scroll extends Component {
    render(){
        return(
            <div className={this.props.class} >
                <div className="container">
                    <div className={this.props.class === "resultScroll" ? "chevblack":"chevron"}></div>
                    <div className={this.props.class === "resultScroll" ? "chevblack":"chevron"}></div>
                    <div className={this.props.class === "resultScroll" ? "chevblack":"chevron"}></div>
                </div>
            </div>
        );
    }
}

export default Scroll;