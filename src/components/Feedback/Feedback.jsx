import { Section } from "components/Section/Section.jsx";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.jsx";
import {Notification} from "components/Notification/Notification.jsx";
import { useState  } from "react"; 

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [ bad,  setBad] = useState(0);

    const incrementFunc = (prev)=> (prev +1);
    const handleClickFeedbackBtn = (e)=>{
        const {name} = e.target;        
        switch (name) {
            case "good":
                setGood(incrementFunc);
                break;      
            case "neutral":
                setNeutral(incrementFunc);
                break;
            case "bad":
                setBad(incrementFunc);
                break;      
            default:
              throw new Error();
          }
          console.log(good);    
    };
    function countTotalFeedback(){  
        return good + neutral + bad;
    }
    function countPositiveFeedbackPercentage(total){        
        if (total){
            return Math.round(good /  countTotalFeedback() * 100);
        }
        return total;
    }

  
    const total = countTotalFeedback();                                         
    return ( 
            <>                
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["good","neutral","bad"]} onLeaveFeedback={handleClickFeedbackBtn}/>
                </Section> 
                <Section title="Statistics">
                    {total !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage(total)}/> 
                    :  <Notification message="There is no feedback"/>}             
                </Section>  
            </>           
        )      
}; 


  