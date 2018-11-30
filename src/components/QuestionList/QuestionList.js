import React, {Component} from 'react';
import QHeader from '../QHeader/QHeader';
import QFooter from '../QFooter/QFooter';
import QNavigation from '../QNavigation/QNavigation';
import QMain from '../QMain/QMain';
import './QuestionList.css';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            qNumber:0,
            submit: false,
            answers: {
                1:null,
                2:null,
                3:null,
                4:null,
                5:null,
                6:null,
                7:null,
                8:null,
                9:null,
                10:null,
                11:null,
                12:null,
                13:null,
                14:null,
                15:null,
                16:null,
                17:null,
                18:null,
                19:null,
                20:null,
                21:null,
                22:null,
                23:null,
                24:null,
                25:null,
                26:null,
                27:null,
                28:null,
                29:null,
                30:null
            }
        }
        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
        this.goSpecificQuestion = this.goSpecificQuestion.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
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

    goSpecificQuestion(i) {
        this.setState({
            qNumber: i
        });
    }

    updateAnswer(i, selection) {
        let answers = this.state.answers;
        answers[i] = selection;
        this.setState({answers})
    }

    render() {
        return (
            <div className="QuestionList">
                <QHeader qNumber={this.state.qNumber}/>
                <QNavigation onClick={this.goSpecificQuestion} qNumber={this.state.qNumber} answers={this.state.answers}/>
                <QMain qNumber={this.state.qNumber} onClick={this.updateAnswer} answers={this.state.answers}/>
                <QFooter qNumber={this.state.qNumber} goBack={this.goBack} goForward={this.goForward}/>
            </div>
        );
    }
}

export default QuestionList;