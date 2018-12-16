import React,{Component} from 'react';
import './Result.css';
// import "confetti-js";
import ResultScroll from '../ResultScroll/ResultScroll';
import sizeMe from 'react-sizeme';
import Confetti from 'react-confetti';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "result": null,
            "confetti":false
        };
    }

    componentDidMount() {
        for(let i = 1; i <= 30; i++) {
            if(this.props.answers[i] === null ) {
                window.location='/';
            }
        }
        var self = this;
        window.addEventListener('scroll', function(e) {
            if(window.scrollY > 50){
                self.setState({"confetti": true});
            }
        })

        const answers = this.props.answers;
        let check = {
            "A":0,
            "B":0,
            "C":0
        }

        for(var key in answers) {
            if(answers.hasOwnProperty(key)) {
                if(answers[key] === "A") {
                    check["A"] += 1;
                } else if(answers[key] === "B") {
                    check["B"] += 1;
                } else if(answers[key] === "C") {
                    check["C"] += 1;
                }
            }
        }

        if(check["A"] > check["B"]) {
            this.setState({"result": "SAT"});
        } else if(check["A"] < check["B"]) {
            this.setState({"result":"ACT"});
        } else {
            if(check["C"] > 6) {
                this.setState({"result":"ACT"})
            }else {
                this.setState({"result": "SAT"})
            }
        }
    }

    render() {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if(this.state.result === "SAT"){
            return (
                <div className="Result">
                    <ResultScroll />
                    <div id="result">
                        {this.state.confetti ? <Confetti {...this.props.size} numberOfPieces={75} height={h} gravity={0.05} colors={["#e74c3c","#c0392b","#ff7675","#d63031","#FDA7DF"]}/> : null }
                        <h1 className="resulttest">{this.state.result}</h1>
                        <p className="resultreason">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Result">
                    <ResultScroll />
                    <div id="result">
                        {this.state.confetti ? <Confetti {...this.props.size} numberOfPieces={75} height={h} gravity={0.05} colors={["#74b9ff","#0984e3","#00cec9","#4834d4"]}/> : null }
                        <h1 className="resulttest">{this.state.result}</h1>
                        <p className="resultreason">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            )
        }
    }
}

export default sizeMe({ monitorHeight: true, monitorWidth:true })(Result);