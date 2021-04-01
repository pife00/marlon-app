import * as actionTypes from "../actions/actionTypes"

const initialState = {
    phones:[],
    accessories:[]
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.SET_PHONE_DOCUMENTS:
            return{
                ...state,
                phones:action.phones,
                accessories:action.accessories
            }

        default:
            return state
    }
}

export default reducer;