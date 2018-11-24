import React, {Component} from 'react';
import './Landing.css';
import Box from '../Box/Box';
import Scroll from '../Scroll/Scroll';

class Landing extends Component {
    render(){
        return (
            <div className="Landing">
                <Box />
                <Scroll class={"Scroll"}/>
            </div>
        );
    }
}

export default Landing;