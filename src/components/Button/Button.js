import React, {Component} from 'react';
import './Button.css'

class Button extends Component {
    goToQuestions = () => {
        window.location = '/questions';
        return false;
    }

    render(){
        return (
            <div className="Button" onClick={this.goToQuestions}>
                Take Test!
            </div>
        );
    }
}

export default Button;