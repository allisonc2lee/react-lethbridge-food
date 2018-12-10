import React from 'react';

const restaurantList = (props) => {
    return(
        <div>
            <li>
                <span>Should have a list of restaurant: {props.name}</span>
            </li>
        </div>
    )
}

export default restaurantList;