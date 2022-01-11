import React, { Component } from 'react'
import { connect } from "react-redux";
import TeamOmegaDropDown from './common/TeamOmegaDropDown';
import { fetchCountries, fetchCountryDetails } from "../Actions/CountryAction";
import { continent } from "../mockFile";
import MainArea from './MainArea';

class MainComponent extends Component {


  DropDownHandlerContinent = item => {
    this.props.fetchCountries(item);
  }

  DropDownHandlerCountries = item => {
    this.props.fetchCountryDetails(item);
  }


  render() {
    return (
      <div className='maincomponent'>
        <div className="dropdowns">
          <TeamOmegaDropDown typeHeader="Continent" values={continent} changeSelect={this.DropDownHandlerContinent} />
          <TeamOmegaDropDown typeHeader="Countries" values={this.props.countries} changeSelect={this.DropDownHandlerCountries} />
        </div>
        <MainArea />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  countries: state.countries.countries,
});
export default connect(mapStateToProps, { fetchCountries, fetchCountryDetails })(MainComponent);
