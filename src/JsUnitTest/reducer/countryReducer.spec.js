import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAIL, GET_COUNTRY_ERROR, GET_COUNTRY_DETAILS_ERROR } from '../../Actions/Types';
import countryReducer, { initialState } from '../../reducers/countryReducer';


describe('Country Reducer', () => {
  let newState;

  it('Should return default state', () => {
    newState = countryReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('-->return new state with countryList if pass type FETCH_COUNTRIES', () => {
    let list = ["india", "pakistan", "usa"];

    newState = countryReducer(undefined, {
      type: FETCH_COUNTRIES,
      payload: list
    });
    expect(newState.countries).toEqual(list);
  });

  it('-->return new state with error if pass type GET_COUNTRY_ERROR', () => {
    let message = "FOund Error"
    newState = countryReducer(undefined, {
      type: GET_COUNTRY_ERROR,
      payload: message
    });
    expect(newState.error).toEqual(message);
  });

  it('-->return new state with countryDetails if pass type FETCH_COUNTRY_DETAIL', () => {
    let details = { name: "india", capital: "delhi" };
    newState = countryReducer(undefined, {
      type: FETCH_COUNTRY_DETAIL,
      payload: details
    });
    expect(newState.countryDetails).toEqual(details);
  });



  it('-->return new state with error if pass type GET_COUNTRY_DETAILS_ERROR', () => {
    let message = "Your server is budy"
    newState = countryReducer(undefined, { type: GET_COUNTRY_DETAILS_ERROR, payload: message });
    expect(newState.error).toEqual(message);
  });


});
