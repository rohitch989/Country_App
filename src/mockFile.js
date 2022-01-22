

export const continent = ["africa", "americas", "asia", "europe", "oceania"];


export const mapStateToProps = state => ({
  countries: state.countries.countries,
  countryDetail: state.countries.countryDetails,
  error: state.countries.error
});