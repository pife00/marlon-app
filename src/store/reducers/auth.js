import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user:null,
    error:null,
}

const reducer = (state = initialState,actions) =>{

    switch (actions.type) {

        case actionTypes.SET_USER:
            return{
                ...state,
                user:actions.user
            }

        case actionTypes.CLEAN_USER:
            return{
                ...state,
                user:null,
                error:null,
            }
       

        case actionTypes.SET_USER_ERROR:
            return{
                ...state,
                error:actions.error
            }

        default:
            return state
    }
}

export default reducer;