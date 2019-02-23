import React, {Component} from 'react';
import QHeader from '../QHeader/QHeader';
import QFooter from '../QFooter/QFooter';
import QNavigation from '../QNavigation/QNavigation';
import QMain from '../QMain/QMain';
import './QuestionList.css';

class QuestionList extends Component {

    constructor(props) {
        super(props);

        this.onUnload = this.onUnload.bind(this);
        this.removeListner = this.removeListner.bind(this);
    }

    onUnload(event) { 
        event.returnValue = "Hellooww"
    }

    componentDidMount() {
       window.addEventListener("beforeunload", this.onUnload);
    }

    removeListner() {
        window.removeEventListener('beforeunload', this.onUnload);
        this.props.goToResult();
    }

    render() {
        return (
            <div className="QuestionList">
                <QHeader qNumber={this.props.qNumber}/>
                <QNavigation onClick={this.props.goSpecificQuestion} qNumber={this.props.qNumber} answers={this.props.answers}/>
                <QMain qNumber={this.props.qNumber} onClick={this.props.updateAnswer} answers={this.props.answers}/>
                <QFooter qNumber={this.props.qNumber} goBack={this.props.goBack} goForward={this.props.goForward} removeListener={this.removeListner}/>
            </div>
        );
    }
}

export default QuestionList;