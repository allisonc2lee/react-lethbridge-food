import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './RestaurantList.css';

const restaurantList = (props) => {
    return(
        <Aux>
            <button className={classes.testing} onClick={props.getList}>Get List</button>
            <ul>
                { props.rList }
            </ul>
        </Aux>
    )
}

export default restaurantList;