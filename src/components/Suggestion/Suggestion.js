import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const suggestion = (props) => {
    return (
        <Aux>
            <div>
                <h2>Let's go to</h2>
                <div>
                   {props.suggestion}
                </div>
                <button onClick={props.suggested}>Get Suggestion</button>
            </div>
        </Aux>
    )
}

export default suggestion;