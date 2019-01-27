import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from '../../styles/app.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Suggestion = (props) => {

    return (
        <Aux>
            <div className={styles.Suggestion}>
                <div className={styles.Suggestion__getSuggestion}>
                   <p className={styles.getSuggestion__name}>{props.suggestion}</p>
                   <p className={styles.getSuggestion__address}>{props.address}</p>
                </div>
                <button className={styles.Suggestion__button} onClick={props.suggested} disabled={!props.isDisabled}>Get Suggestion</button>
            </div>
        </Aux>
    )
}

export default Suggestion;