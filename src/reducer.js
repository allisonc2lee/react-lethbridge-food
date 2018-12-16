import * as actionTypes from './action';

const initialState = {
    cuisineID: 1
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CUISINES:
            return {
             ...state,
             cuisineID: state.cuisineID.concat({id: action.id, value: action.value})
            }
        default:
            return {
                cuisineID: 1
            }
            
    }

};

export default reducer;