import React, {Component} from 'react';
import './Half.css';

class Half extends Component {

    render(){
        if(this.props.type === "SAT"){
            return (
                <div className="Half red">
                    <div className="img-div">
                        <img src={require("../../img/SAT.png")} alt="" srcset="" className="Half-img"/>
                    </div>
                    <p className="description">The SAT is a standardized test meant to show schools how prepared you are for college by measuring key skills like reading comprehension, computational ability, and clarity of expression. Because so many students take the test, it also provides schools with data about how you compare to your peers nationwide.</p>
                </div>
            );
        }else{
            return (
                <div className="Half blue">
                    <div className="img-div">
                        <img src={require("../../img/ACT.png")} alt="" srcset="" className="Half-img"/>
                    </div>
                </div>
            );
        }
    }
}

export default Half;