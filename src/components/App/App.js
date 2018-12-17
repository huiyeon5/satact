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
                1:"B",
                2:"B",
                3:"B",
                4:"B",
                5:"B",
                6:"B",
                7:"B",
                8:"B",
                9:"B",
                10:"B",
                11:"B",
                12:"B",
                13:"B",
                14:"B",
                15:"B",
                16:"B",
                17:"B",
                18:"B",
                19:"B",
                20:"B",
                21:"B",
                22:"B",
                23:"B",
                24:"B",
                25:"B",
                26:"B",
                27:"B",
                28:"B",
                29:"B",
                30:"B"
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
        console.log(answers);
        this.setState({answers})
    }

    goToResult() {
        const answers = this.state.answers;
        let notAnswered = []
        for(let i = 1; i <= 30; i++) {
            if(answers[i] === null ) {
                notAnswered.push(i);
            }
        }

        if(notAnswered.length === 0 ){
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
