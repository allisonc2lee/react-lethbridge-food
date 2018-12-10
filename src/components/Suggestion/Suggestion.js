import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const suggestion = (props) => {

    return (
        <Aux>
            <div>
                <h2>Suggestion:</h2>
                <div>
                    <h3>Populat Restaurant in Lethbridge</h3>
                    <p>{props.restaurant}</p>
                </div>
            </div>
        </Aux>
    )
}

export default suggestion;