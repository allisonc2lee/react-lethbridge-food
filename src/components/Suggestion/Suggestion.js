import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const suggestion = (props) => {

    return (
        <Aux>
            <div>
                <h2>Let's go to</h2>
                <div>
                   <p><strong>{props.suggestion}</strong></p>
                   <p><strong>{props.address}</strong></p>
                </div>
                <button onClick={props.suggested} disabled={!props.isDisabled}>Get Suggestion</button>
            </div>
        </Aux>
    )
}

export default suggestion;