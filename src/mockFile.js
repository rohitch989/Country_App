import checkPropTypes from "check-prop-types";

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);



export const continent = ["africa", "americas", "asia", "europe", "oceania"];


export const mapStateToProps = state => ({
  countries: state.countries.countries,
  countryDetail: state.countries.countryDetails,
  error: state.countries.error
});