import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) =>{    
    return (    
    <ul className="feedbackOptions"> 
        {options.map(option =><button onClick={onLeaveFeedback} key={[option+"Btn"]} className={css.feedbackBtn} name={option}>{option}</button>)}  
    </ul>
    )    
}; 

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

