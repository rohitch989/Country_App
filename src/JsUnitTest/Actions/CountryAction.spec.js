import moxios from "moxios";
import store from '../../store';
import { fetchCountries, fetchCountryDetails } from '../../Actions/CountryAction';


describe('-->CountryAction ', () => {

  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());


  it('-->fetchCountries updated state.countries', () => {

    let expectedState = [
      { name: { common: "india" } },
      { name: { common: "pak" } },
      { name: { common: "usa" } },
      { name: { common: "england" } },
      { name: { common: "srilanka" } },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    return store.dispatch(fetchCountries("africa"))
      .then(() => {
        let newState = store.getState();
        newState = newState.countries.countries;
        expectedState = expectedState.map(item => item.name.common);
        expect(newState).toEqual(expectedState);
      });
  });

  it('-->fetchCountryDetails updated state.countriesDetails', () => {

    let expectedState = [{ name: "india", capital: "delhi" }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    return store.dispatch(fetchCountryDetails("india"))
      .then(() => {
        let newState = store.getState();
        newState = newState.countries.countryDetails;
        expectedState = expectedState[0];
        expect(newState).toEqual(expectedState);
      });
  });


});
