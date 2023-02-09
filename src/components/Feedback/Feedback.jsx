import { Component } from "react";
import { Section } from "components/Section/Section.jsx";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.jsx";
import {Notification} from "components/Notification/Notification.jsx";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    handleClickFeedbackBtn = (e)=>{
        const {name} = e.target;
        this.setState((prevState) =>({[name]: prevState[name]+1}))
    };
    countTotalFeedback(){  
        return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage(total){        
        if (total){
            return Math.round(this.state.good /  this.countTotalFeedback() * 100);
        }
        return total;
    }

    render() { 
        const total = this.countTotalFeedback();                                         
        return ( 
            <>                
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClickFeedbackBtn}/>
                </Section> 
                <Section title="Statistics">
                    {total !== 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage(total)}/> 
                    :  <Notification message="There is no feedback"/>}             
                </Section>  
            </>           
        )      
    }
}; 


  