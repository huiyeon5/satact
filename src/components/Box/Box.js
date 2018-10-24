import React, {Component} from 'react';
import './Box.css'
import Button from '../Button/Button';

class Box extends Component {
    render(){
        return (
            <div className="Box">
                <div className="box-div">
                    <h1 className="Box-heading">Stressed about <br/> what exam to take?</h1>
                    <h3 className="Box-heading Box-tag"><b>SAT</b> or <b>ACT</b>, both are wonderful exams which would boost your College Application and your Career progression! <br/><br/>Take our test to find what's right for you!</h3>
                    <div className="button-div">
                        <Button />
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;