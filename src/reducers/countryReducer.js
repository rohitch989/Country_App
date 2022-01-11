import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL } from "../Actions/Types";

const initialState = {
  countries: [],
  countryDetails: {},

}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        countries: action.payload,
        countryDetails: {}
      }

    case FETCH_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetails: action.payload
      }


    default:
      return state;

  }
}


export default countryReducer;
