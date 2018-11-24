import React, {Component} from 'react';

class Arrow extends Component{
    render(){
        return(
            <div className={this.props.class}>
                <span className="dArrow">VS</span>
            </div>
        );
    }
}

export default Arrow;