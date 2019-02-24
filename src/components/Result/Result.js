import React,{Component} from 'react';
import './Result.css';
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
        if(localStorage.getItem("answers") !== null) {
            var self = this;
            window.addEventListener('scroll', function(e) {
                if(window.scrollY > 50)  {
                    self.setState({"confetti": true});
                }
            })
            
            const answers = JSON.parse(localStorage.getItem("answers"));
            localStorage.removeItem("answers")
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
        } else {
            window.location='/'
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
                        <p className="resultreason">Congratulations, you have finished the test! Based on our analysis SAT seems to be a more suiting test for you. You seem to be well rounded and like to take some time reading questions and the passage. For that reason SAT is a better test for you as you can take more time than the ACT. We hope you take these results and start studying for you test so that you can get a head start than everyone else.</p>
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
                        <p className="resultreason">Congratulations, you have finished the test! Based on our analysis ACT seems to be a more suiting test for you. You seem to excel more in mathematics and science. Also your ability to go through questions seem to be faster than others which is why we recommend you the ACT more. We hope you take these results and start studying for you test so that you can get a head start than everyone else.</p>
                    </div>
                </div>
            )
        }
    }
}

export default sizeMe({ monitorHeight: true, monitorWidth:true })(Result);