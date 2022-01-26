import moxios from "moxios";
import store from '../../store';
import { fetchCountries, fetchCountryDetails } from '../../Actions/CountryAction';



describe('-->CountryAction ', () => {
  let url;

  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  describe('-->fetchCountries', () => {
    let continent = "asia";
    const url = `https://restcountries.com/v3.1/region/${continent}`;
    let expectedState = [
      { name: { common: 'india' } },
      { name: { common: 'pak' } },
      { name: { common: 'usa' } },
      { name: { common: 'england' } },
      { name: { common: 'srilanka' } }
    ];
    beforeEach(() => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        if (request.url === url)
          request.respondWith({ status: 200, response: expectedState });
        else
          request.respondWith({ status: 500, response: "Server Error" });
      });
    })

    it('updated state.countries',
      () => store.dispatch(fetchCountries(continent))
        .then(() => {
          let { error, countries } = store.getState().countries;
          expectedState = expectedState.map(item => item.name.common)
          let bool = countries == expectedState;
          expect(error).toBeUndefined;
          expect(bool).toBeTrue;
        })

    )

    it('updated state.error if anything goes wrong',
      () => {
        continent = "";
        return store.dispatch(fetchCountries(continent))
          .then(() => {
            let { error, countries } = store.getState().countries;
            let bool = countries === expectedState;
            expect(error.length).toBeGreaterThan(0);
            expect(bool).toBeFalse;
          })
      }
    )
  });

  describe('-->fetchCountryDetails', () => {
    let country = 'india';
    let expectedState = [{ name: "india", capital: "delhi" }];
    const url = `https://restcountries.com/v2/name/${country}?fullText=true`;

    beforeEach(() => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        if (request.url === url)
          request.respondWith({ status: 200, response: expectedState });
        else
          request.respondWith({ status: 500, response: "Server Error" });
      });
    })
    it('updated state.countriesDetails', () => {

      return store.dispatch(fetchCountryDetails(country))
        .then(() => {
          let { error, countryDetails } = store.getState().countries;
          expectedState = expectedState[0];
          let bool = countryDetails == expectedState;
          expect(error.length).toBe(0);
          expect(bool).toBeTrue;
        });
    });
    it('updated state.error if anything goes wrong', () => {
      country = "";
      return store.dispatch(fetchCountryDetails(country))
        .then(() => {
          let { error, countryDetails } = store.getState().countries;
          expectedState = expectedState[0];
          let bool = countryDetails == expectedState;
          expect(error.length).toBeGreaterThan(0);
          expect(bool).toBeFalse;
        });
    });

  });




});
