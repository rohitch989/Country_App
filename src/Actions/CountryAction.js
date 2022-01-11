import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL } from "./Types";
import { fetchRegionCountriesName, fetchRegionCountriesDetails } from "../mockFile";


export const fetchCountries = continent => dispatch => {
  fetchRegionCountriesName(continent).then(data =>
    dispatch({
      type: FETCH_COUNTRIES,
      payload: data
    })).catch(e => console.error(e.message));
}


export const fetchCountryDetails = country => async (dispatch) => {

  fetchRegionCountriesDetails(country).then(data =>
    dispatch({
      type: FETCH_COUNTRY_DETAIL,
      payload: data
    })
  ).catch(e => console.log(e.message));
}

