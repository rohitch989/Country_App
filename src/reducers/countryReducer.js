import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL, GET_COUNTRY_DETAILS_ERROR, GET_COUNTRY_ERROR } from "../Actions/Types";

export const initialState = {
  countries: [],
  countryDetails: {},
  error: ""
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        countries: action.payload,
        countryDetails: {},
        error: ""
      }

    case FETCH_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetails: action.payload
      }
    case GET_COUNTRY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GET_COUNTRY_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;

  }
}


export default countryReducer;
