import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from '../../styles/app.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Suggestion extends Component {

    render() {
        return(
        <Aux>
            <div className={styles.Suggestion}>
                <div className={styles.Suggestion__getSuggestion}>
                <p className={styles.getSuggestion__name}>{this.props.suggestion}</p>
                <p className={styles.getSuggestion__address}>{this.props.address}</p>
                </div>            
            </div>
        </Aux>
        )
    }
}

export default Suggestion;