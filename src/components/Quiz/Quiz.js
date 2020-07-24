import React from 'react';
import Navbar from './../Navbar/Navbar';

import "./Quiz.css";

import { QuizData } from './QuizData';



class Quiz extends React.Component{
    state={
        toggle:false,
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd:false,
        score:0,
        disabled:true
        // low:'Warning you are at an low risk of having corona virus',
        // medium:'Warning you are at an medium risk of having corona virus',
        // High:'Warning you are at an high risk of having corona virus'
        
    }

    openselftest = () =>{
        this.setState({
            toggle : !this.state.toggle
        })
    }

    loadQuiz = () =>{
        const {currentQuestion} =this.state;
        this.setState(() => {
            return{
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
    }
    componentDidMount(){
        this.loadQuiz();
    }
    nextQuestionHandler = () =>{
        const {userAnswer, answer, score} = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }

    }
    //updates the component
    componentDidUpdate(prevProps, prevState){
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answers: QuizData[currentQuestion].answer
                }
            }
            )
        // if (currentQuestion === QuizData.length - 1 ){
        //     this.setState(() =>{
        //         return{

        //         }
        //     })
        // }
        }
    }

    checkAnswer = answer =>{
        this.setState({
            userAnswer:answer
        })
    }

    finishHandler = () =>{
        // switch(this.state.currentQuestion === QuizData.length -1) {
        //     case this.state.score<=3:
        //      return(
        //          <div>you are at a low risk </div>
        //      )
        //       break;
        //     case this.state.score==4 || this.state.score==5:
        //         return(
        //             <div>you are at a medium risk </div>

        //         )   
        //       break;
            
        //       case this.state.score>5:
        //         return(
        //             <div>you are at a high risk </div>

        //         )   
        //       break;
        //     default:
            
        //       this.setState({
        //           quiuzEnd:true
    
        //       })
        if(this.state.currentQuestion === QuizData.length - 1){
        this.setState({
            quiuzEnd:true
        
            })
            console.log('finish handleer');

          }
            
        
    }
    render() {
        const {  questions, options, quizEnd } = this.state;
        if(quizEnd){
            return(
                <div>
                    <h2>Thnk you for taking this quick test</h2>
                </div>
            )
        }
        if(this.state.toggle){
            return(
                <div>
                <Navbar/>
                    <div className="body">
                        <p className="dashboard-text">Risk Checker</p>
                        <h3 className="dashboard-title">CoronaVirus Self Assesment Test</h3>
                        
                        <div className="question" data-v-83937a64>
                            <h5 className="risk">  
                            {questions}
                            </h5>
                        </div>
                        {/* {currentQuestion === QuizData.length - 1 } */}
                    {options.map(option =>(
                        <button key={option.id}  className="option" data-v-83937a64 onClick={() => {
                            this.checkAnswer(option); 
                            this.nextQuestionHandler();
                            this.finishHandler();
                        }}>
                            {option}
                            
                        </button>
    
                    ))}
                    </div>
                </div>
    
            )
        }
        return <div>
            <Navbar/>
            <div className="body">
                        <p className="dashboard-text">Risk Checker</p>
                        <h3 className="dashboard-title">CoronaVirus Self Assesment Test</h3>
                        
                        <div className="question" data-v-83937a64>
                            <h5 className="risk">  
                            Hello! This risk check self assesment was developed based on the
            guidelines from the WHO. This assesment should not be taken as a
            medical advice. Any information you share with us will be kept
            strictly confidential.
                            </h5>
                        </div>
                    
                        <button  className="mybutton" onClick={this.openselftest}>
                            Start                               
                        </button>
    
                    </div>
                </div>
            ;
    }
}


export default Quiz;