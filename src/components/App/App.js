import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from '../Start/Start';
import QuestionList from '../QuestionList/QuestionList';
import Result from '../Result/Result';

class App extends Component {
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
                29:null
            },
            notAnswered:null
        }
        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
        this.goSpecificQuestion = this.goSpecificQuestion.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.goToResult = this.goToResult.bind(this);
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
        if(this.state.qNumber < 29){
            this.setState({qNumber: this.state.qNumber + 1});
        }

        if(this.state.qNumber === 29) {
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

    goToResult() {
        const answers = this.state.answers;
        let notAnswered = []
        for(let i = 1; i <= 29; i++) {
            if(answers[i] === null ) {
                notAnswered.push(i);
            }
        }

        if(notAnswered.length === 0 ){
            localStorage.setItem("answers", JSON.stringify(this.state.answers));        
            window.location = '/result';
        } else {
            alert(`You havent completed Question ${notAnswered}!`)
        }
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Start} />
                    <Route 
                        exact path="/questions" 
                        render={(routeProps) => (
                            <QuestionList 
                                {...routeProps} 
                                qNumber={this.state.qNumber} 
                                goSpecificQuestion={this.goSpecificQuestion} 
                                answers={this.state.answers}
                                updateAnswer={this.updateAnswer}
                                goBack={this.goBack}
                                goForward={this.goForward}
                                goToResult={this.goToResult}
                            />
                        )} 
                    />
                    <Route 
                        path="/result" 
                        render={(routeProps) => (
                            <Result 
                                {...routeProps}
                                answers={this.state.answers}
                            />
                        )} 
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
