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
                1:"A",
                2:"A",
                3:"A",
                4:"A",
                5:"A",
                6:"A",
                7:"A",
                8:"A",
                9:"A",
                10:"A",
                11:"A",
                12:"A",
                13:"A",
                14:"A",
                15:"A",
                16:"A",
                17:"A",
                18:"A",
                19:"A",
                20:"A",
                21:"A",
                22:"A",
                23:"A",
                24:"A",
                25:"A",
                26:"A",
                27:"A",
                28:"A",
                29:"A",
                30:"A"
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
