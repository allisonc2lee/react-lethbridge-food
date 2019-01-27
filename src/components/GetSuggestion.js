import React from 'react';
import styles from './../styles/app.module.scss'

const GetSuggestionButton = (props) => {
    return(
        <div className={styles.GetSuggestionButton}>
            <button className={styles.Suggestion__button} onClick={props.suggested} disabled={!props.isDisabled}>Get Suggestion</button>
        </div>
    )
}


export default GetSuggestionButton