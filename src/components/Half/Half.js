import React, {Component} from 'react';
import './Half.css';

class Half extends Component {

    render(){
        if(this.props.type === "SAT"){
            return (
                <div className="Half red">
                    <div className="half-cover">
                        <div className="img-div">
                            <img src={require("../../img/SAT.png")} alt="" srcset="" className="Half-img"/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="Half blue">
                    <div className="half-cover">
                        <div className="img-div">
                            <img src={require("../../img/ACT.png")} alt="" srcset="" className="Half-img"/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Half;