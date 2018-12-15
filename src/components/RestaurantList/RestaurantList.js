import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const restaurantList = (props) => {
    return(
        <Aux>
            <button onClick={props.getList}>Get List</button>
            <ul>
                { props.rList }
            </ul>
        </Aux>
    )
}

export default restaurantList;