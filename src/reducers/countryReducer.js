import { CLEAR_STATE, FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL, GET_COUNTRY_DETAILS_ERROR, GET_COUNTRY_ERROR } from "../Actions/Types";

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
        error: "",
        countryDetails: action.payload
      }
    case GET_COUNTRY_ERROR:
      return {
        countries: [],
        countryDetails: {},
        error: action.payload
      }
    case GET_COUNTRY_DETAILS_ERROR:
      return {
        ...state,
        countryDetails: {},
        error: action.payload
      }
    default:
      return state;

  }
}


export default countryReducer;
