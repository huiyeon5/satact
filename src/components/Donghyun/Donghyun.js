import React, { Component } from 'react';
import './Donghyun.css';

class Donghyun extends Component {

    render() {
        return (
        <div className="dong">
            <div className="Donghyun">
                <div className="whytext">
                    <h2>&#126; Why I made this website &#126;</h2>
                    <p>Many students nowadays struggle between the problem of whether to take the SAT or the ACT. While there are many websites that inform people briefly on what each of these tests is like, not many seem to actually help students decide which to take. As a student who had also debated this issue, I decided to create a small tool that might help students to choose their test. SATVACT is a 29 question survey that evaluates people based on their response to the questions and produces an accurate result of whether the SAT or the ACT will be more suiting for an individual. This website is essential for anyone, regardless of their age, who is having a hard time choosing between the SAT and the ACT.</p>

                    <h3>&#126; About Me &#126;</h3>
                    <div style={{display:`grid`, gridTemplateColumns:`300px auto`}}>
                        <img src={require("../../img/donghyun.png")} alt="" style={{maxWidth:`100%`, height:`auto`}}/>
                        <p>My name is Ryan(Donghyun) Lee and I am currently studying at Singapore American School. I am an 11th grader who has an interest in helping peers. This problem between SAT and ACT came to me at the end of 10th grade when I started to prepare bit by bit for these two tests. I eventually took the SAT but I wanted to help people decide more quickly so that they can start studying for these test as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Donghyun;
