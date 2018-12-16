import React, {Component} from 'react';
import "./ResultScroll.css";
import Scroll from '../Scroll/Scroll';

class ResultScroll extends Component {
    render() {
        return(
            <div className="ResultScroll">
                <div className="ResultTitles">
                    <h2 className="resultTitle">Based on your Quiz Answers</h2>
                    <h3 className="resultTitle resultTag">We recommend you to take...</h3>
                </div>
                <Scroll class={"resultScroll"}/>
            </div>
        )
    }
}

export default ResultScroll;