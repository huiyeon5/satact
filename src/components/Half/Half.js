import React, {Component} from 'react';
import './Half.css';
import Scroll from '../Scroll/Scroll';
import Arrow from '../Arrow/Arrow';

class Half extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: false
        }

        this.change = this.change.bind(this);
        this.change2 = this.change2.bind(this);
    }

    change(e){
        let h = document.querySelector('.Half');
        h.setAttribute("style","transform: translateX(100%); background: #c23616;");
        let img = document.querySelectorAll('.img-div');
        img.forEach((i) => {
            i.classList.toggle('active');
        })
        this.setState({change:!this.state.change})
    }

    change2(e){
        let h = document.querySelector('.Half');
        h.setAttribute("style","transform: translateX(0); background: #60a3bc;");
        let img = document.querySelectorAll('.img-div');
        img.forEach((i) => {
            i.classList.toggle('active');
        })
        this.setState({change:!this.state.change})
    }

    render(){
        if(this.props.type === "SAT"){
            let arrowCheck;
            if(!this.state.change){
                arrowCheck = <Arrow class="arrow1" icon="angle-double-right" text="ACT" onClick={this.change}/>
            }else{
                arrowCheck = <Arrow class="arrow2" icon="angle-double-left" text="SAT" onClick={this.change2}/>
            }
            return (
                <div className="Half">
                    <div className="exam1">
                        <span className="introducing">Introducing...</span>
                        <div className="examName">
                            <h2 className="examHeader">SAT</h2>
                            <span className="examFull">Standardized Aptitude Test</span>
                        </div>
                        <p className="examInfo">The SAT is a standardized test meant to show schools how prepared you are for college by measuring key skills like reading comprehension, computational ability, and clarity of expression. Because so many students take the test, it also provides schools with data about how you compare to your peers nationwide.</p>
                        <div className="splitbutton s1">Learn More!</div>
                    </div>
                    {arrowCheck}
                    <div className="exam2">
                        <span className="introducing">Introducing...</span>
                        <div className="examName">
                            <h2 className="examHeader">ACT</h2>
                            <span className="examFull">American College Testing</span>
                        </div>
                        <p className="examInfo">The purpose of the ACT test is to measure a high school student's readiness for college, and provide colleges with one common data point that can be used to compare all applicants. ACT assessment measures high school students' general educational development and their capability to complete college-level work with the multiple choice tests covering four skill areas: English, mathematics, reading, and science.</p>
                        <div className="splitbutton s2">Learn More!</div>
                    </div>
                    <Scroll class="ExamScroll"/>
                </div>
            );
        }
    }
}

export default Half;