import React, {Component} from 'react';
import QHeader from '../QHeader/QHeader';
import QFooter from '../QFooter/QFooter';


class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            qNumber:0,
            submit: false
        }
        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
    }

    goHome() {
        window.location = '/';
        return false;
    }

    goBack(){
        if(this.state.qNumber > 0 ){
            this.setState({qNumber: this.state.qNumber - 1});
        }
    }

    goForward() {
        if(this.state.qNumber < 30){
            this.setState({qNumber: this.state.qNumber + 1});
        }

        if(this.state.qNumber === 30) {
            this.setState({submit: true});
        }
    }

    render() {
        return (
            <div className="QuestionList">
                <QHeader qNumber={this.state.qNumber}/>
                <QFooter qNumber={this.state.qNumber} goBack={this.goBack} goForward={this.goForward}/>
            </div>
        );
    }
}

export default QuestionList;