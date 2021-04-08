import * as actionTypes from "../actions/actionTypes";

const initialState = {
  visiblePhones: [],
  phones: [],
  visibleAccessories: [],
  accessories: [],
  searchPhone: [],
  searchAccessories:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_PHONE_DOCUMENTS:
      return {
        ...state,
        visiblePhones: action.phones,
      };

    case actionTypes.SET_VISIBLE_ACCESSORIES_DOCUMENTS:
      return {
        ...state,
        visibleAccessories: action.accessories,
      };

    case actionTypes.SET_VISIBLE_DOCUMENTS:
      return {
        ...state,
        phones: action.phones,
        accessories:action.accessories
      };

    case actionTypes.SEARCH_PHONE:
      return {
        ...state,
        searchPhone: action.phone,
        searchAccessories:action.accessories,
      };

    default:
      return state;
  }
};

export default reducer;
