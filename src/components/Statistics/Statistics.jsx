import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = (props) =>{ 
    const entriesProps = Object.entries(props);  
    return (    
    <ul className={css.statList}>  
        {entriesProps.map(option =><li key={option[0]} className={css.statItem}>{option[0]}: {option[1]}</li>)}
    </ul> 
    )
}; 

Statistics.propTypes = {
    props: PropTypes.exact(
        {
            good: PropTypes.number,
            neutral: PropTypes.number,
            bad: PropTypes.number,
            total: PropTypes.number,
            positivePercentage: PropTypes.number,
        }
    )
}
