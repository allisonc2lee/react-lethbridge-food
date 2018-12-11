import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const restaurantList = (props) => {
    return(
        <Aux>
            <ul>
                { props.rList }
            </ul>
        </Aux>
    )
}

export default restaurantList;