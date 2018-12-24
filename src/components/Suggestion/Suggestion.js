import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from '../../styels/app.module.scss';

const suggestion = (props) => {

    return (
        <Aux>
            <div>
                <h2>Let's go to</h2>
                <div>
                   <p>{props.suggestion}</p>
                   <p>{props.address}</p>
                </div>
                <button onClick={props.suggested} disabled={!props.isDisabled}>Get Suggestion</button>
            </div>
        </Aux>
    )
}

export default suggestion;