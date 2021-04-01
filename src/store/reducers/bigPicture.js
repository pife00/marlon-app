import * as actionTypes from '../actions/actionTypes';

const initialState = {
    image:null
}

const reducer = (state = initialState,actions) => {
    switch(actions.type){
        case actionTypes.SET_BIGPICTURE_VIEW:
            return{
                ...state,
                image:actions.image
            }

        default:
           return state
    }
}

export default reducer;