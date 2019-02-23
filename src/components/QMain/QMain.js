import React, {Component} from 'react';
import './QMain.css';

class QMain extends Component {

    constructor(props) {
        super(props);
        this.getQuestions = this.getQuestions.bind(this);
        this.renderQuestions = this.renderQuestions.bind(this);
    }


    getQuestions(){
        var obj = {};
        if(this.props.qNumber === 0){
            obj["Question"] = "Disclaimer";
            let answers = [];
            answers.push("This quiz will take only about 30 - 40 min! Dont worry, it does not test your knowledge, its just to know more about you!")
            answers.push("Do not REFRESH, CLOSE or LEAVE the website as the answers will not be saved!")
            answers.push("You need to finish all the questions if you want to see your results!")
            obj["Answer"] = answers;
        }
        if(this.props.qNumber === 1){
            obj['Question'] = "Do you like to read?";
            let answers = [];
            answers.push("Yes, I'm a total bookworm");
            answers.push("Sometimes");
            answers.push("Only if it's assigned schoolwork");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 2){
            obj['Question'] = "How often do you re-read to make sure you fully understood the text?";
            let answers = [];
            answers.push("I read everything twice");
            answers.push("Only when it's challenging");
            answers.push("Almost Never, I usually get it on the first go");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 3){
            obj['Question'] = "What do you do when the book you have to read has new vocabulary words?";
            let answers = [];
            answers.push("I like to use context clues to understand the meaning of new words (and I’m usually right)");
            answers.push("I can sometimes guess a new word’s meaning, but I like to confirm it with an app or dictionary");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 4){
            obj['Question'] = "Do time limits stress you out?";
            let answers = [];
            answers.push("Yes");
            answers.push("Sometimes");
            answers.push("No");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 5){
            obj['Question'] = "When it comes to writing an essay, are you comfortable arguing your opinion?";
            let answers = [];
            answers.push("Yes, I’m ready to tackle any issue");
            answers.push("Not without doing my research first");
            answers.push("No, I'd rather stick to analyzing someone else's argument");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 6){
            obj['Question'] = "How many times do you plan to take the test?";
            let answers = [];
            answers.push("Just once");
            answers.push("As many times as it takes to get the scores I need");
            answers.push("A few times");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 7){
            obj['Question'] = "How do you plan to prep for the test?";
            let answers = [];
            answers.push("A test prep book with practice tests");
            answers.push("A prep course");
            answers.push("With a test prep tutor");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 8){
            obj['Question'] = `Answer the following WITHOUT using a calculator: \nIf SQRT(x) + 22 = 38, what is the value of x?`;
            let answers = [];
            answers.push("32");
            answers.push("256");
            answers.push("Im not sure how to go around this");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 9){
            obj['Question'] = "Which of the following choices completes the sentence below with information consistent with the graph? Even as women’s roles in high-level positions, such as Congress, have increased almost five-fold since 1981,__________";
            let answers = [];
            answers.push("The pay that women receive relative to men has increased by only approximately 23%");
            answers.push("Women's wages have increase by over 80%");
            answers.push("The effots of women in Congress to raise wages have failed");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 10){
            obj['Question'] = "Your reaction to a lengthy word problem is?";
            let answers = [];
            answers.push("I better read it all carefully and thoroughly to amke sure I know what I am doing");
            answers.push("I'm going to skim the question and get only what I need to start answering the question");
            answers.push("I panic");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 11){
            obj['Question'] = "Do you get extra time for tests in school?";
            let answers = [];
            answers.push("Yes");
            answers.push("No");
            answers.push("Sometimes");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 12){
            obj['Question'] = "Can you stand the idea of not getting to every question?";
            let answers = [];
            answers.push("Yes");
            answers.push("No");
            answers.push("Sometimes");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 13){
            obj['Question'] = "Do you have a hard time spotting details when you read?";
            let answers = [];
            answers.push("Yes");
            answers.push("No");
            answers.push("Sometimes");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 14){
            obj['Question'] = "Which sections do you feel stronger in?";
            let answers = [];
            answers.push("I'm stronger in reading and writing");
            answers.push("I'm stronger in math and science");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 15){
            obj['Question'] = "When you are presented with graphs and charts, how do you feel?";
            let answers = [];
            answers.push("I read graphs and chart easily");
            answers.push("I find graph and chart reading a challenge");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 16){
            obj['Question'] = "What do you prefer?";
            let answers = [];
            answers.push("I prefer a long grammar section");
            answers.push("I prefer a long reading section");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 17){
            obj['Question'] = "I perfom better on tests that..";
            let answers = [];
            answers.push("Ask to answer math questions without a calculator");
            answers.push("Let me use my calculator as much as I need");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 18){
            obj['Question'] = "Compared to my reading abilities, my grammar skills are..";
            let answers = [];
            answers.push("A little better or worse, but not by that much");
            answers.push("Much better");
            answers.push("Much worse");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 19){
            obj['Question'] = "I like to study..";
            let answers = [];
            answers.push("For hours at a time");
            answers.push("Whenever I can find time in my schedule");
            answers.push("In short intervals");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 20){
            obj['Question'] = "Reading information about a science experiment..";
            let answers = [];
            answers.push("Would be a torture");
            answers.push("Actually sounds Okay");
            answers.push("Is awesome");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 21){
            obj['Question'] = "Reading comprehension passages..";
            let answers = [];
            answers.push("Should be as short as possible");
            answers.push("Need to be really straightforward");
            answers.push("Is what I love");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 22){
            obj['Question'] = "Math is..";
            let answers = [];
            answers.push("So scary");
            answers.push("Awesome");
            answers.push("Fine if the questions aren't confusing");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 23){
            obj['Question'] = "If I have to answer a math question, I want it to be..";
            let answers = [];
            answers.push("A word problem");
            answers.push("A question with drawings, graphs or charts");
            answers.push("As simple as possible");
            answers.push("High difficulty. I'm a math wiz");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 24){
            obj['Question'] = "My college-level vocabulary is..";
            let answers = [];
            answers.push("Excellent. I am erudite and assiduous in my learning");
            answers.push("Above average. I know what laudable means based upon word roots");
            answers.push("Average. I can figure out the different between the words like malic and benign");
            answers.push("Below average. They are like a mystery to me");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 25){
            obj['Question'] = "I am the type of student who..";
            let answers = [];
            answers.push("Does really well on tests but doesn't have to put in a lot of effort");
            answers.push("Does really well on tests but works really hard to attain those grades");
            answers.push("Doesn't do well on tests, but mostly because I don't study");
            answers.push("Doesn't do well on tests no matter how much I study");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 26){
            obj['Question'] = "Which one do you prefer?";
            let answers = [];
            answers.push("I prefer to answer all of the math questions together and all of the verbal questions together");
            answers.push("I don't mind alternating between math and verbal sections");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 27){
            obj['Question'] = "When it comes to reading..";
            let answers = [];
            answers.push("I can read very quickly without sacrificing comprehension");
            answers.push("My comprehension takes a big hit when I read quickly");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 28){
            obj['Question'] = "What about old-fashioned writings?";
            let answers = [];
            answers.push("I understand old-fashioned writing without too much trouble");
            answers.push("I find old-fashioned writing confusing");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 29){
            obj['Question'] = "In reading passages, which one do you prefer?";
            let answers = [];
            answers.push("I prefer reading questions that are presented in order of the passage");
            answers.push("I don't mind skipping around within a passage to answer questions");
            obj['Answer'] = answers;
        }
        else if(this.props.qNumber === 30){
            obj['Question'] = "In math..";
            let answers = [];
            answers.push("I am stronger in algebra than in geometry");
            answers.push("I am stronger in geometry than in algebra");
            answers.push("I am equally strong in both.");
            obj['Answer'] = answers;
        }

        return obj;
    }

    renderQuestions() {
        const questionSet = this.getQuestions();
        var self = this;
        let text = null;
        if(this.props.qNumber === 0) {
            text = (
                <div className={`questionMain question${this.props.qNumber}`}>
                    <span className="questionHeader">{questionSet['Question']}</span>
                    <ul className="answerlist">
                        <div className="answers">
                            {questionSet['Answer'].map((answer, i) => {
                                const list = ['1','2','3'];
                                return (
                                    <li className="firstQuestionItem" key={i}>{`${list[i]}. \t\t ${answer}`}</li>
                                )
                            })}
                        </div>
                    </ul>
                </div>
            )
        }else {
            text = (
                <div className={`questionMain question${this.props.qNumber}`}>
                    <span className="questionHeader">{questionSet['Question']}</span>
                    <ul className="answerlist">
                        <div className="answers">
                            {questionSet['Answer'].map((answer, i) => {
                                const list = ['A','B','C','D'];
                                return (
                                    <li className={self.props.answers[self.props.qNumber] === list[i] ? "selectedAnswer":"answer"} onClick={() => {self.props.onClick(self.props.qNumber, list[i])}} key={i}>{`${list[i]}. \t\t ${answer}`}</li>
                                )
                            })}
                        </div>
                    </ul>
                </div>
            )
        }

        return text
    }


    render() {
        let text= this.renderQuestions();
        return (
            <div className="QMain">{text}</div>
        );
    }
}

export default QMain;