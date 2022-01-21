import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL, GET_COUNTRY_DETAILS_ERROR, GET_COUNTRY_ERROR } from "./Types";
import axios from "axios";



export const fetchCountries = (region) => async (dispatch) => {
  await axios.get(`https://restcountries.com/v3.1/region/${region}`).then(response => {
    let countrys = response.data;
    let countries = countrys.map(item => item.name.common);

    return dispatch({
      type: FETCH_COUNTRIES,
      payload: countries
    })
  })
    .catch(error => dispatch({
      type: GET_COUNTRY_ERROR,
      payload: error.message
    })

    )

}


export const fetchCountryDetails = country => async (dispatch) => {

  await axios.get(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(response => dispatch({
      type: FETCH_COUNTRY_DETAIL,
      payload: response.data[0]
    }))
    .catch(error => {
      if (error.response) {
        let text = `${error.response.data.message} with status ${error.response.status}`
        return dispatch({
          type: GET_COUNTRY_DETAILS_ERROR,
          payload: text
        });
      }
      return dispatch({
        type: GET_COUNTRY_DETAILS_ERROR,
        payload: error.message
      })
    }
    )

}

